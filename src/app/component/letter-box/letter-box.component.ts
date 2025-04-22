import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cartItem } from '../../shared/data/ecommerce/cart';
import { FeathericonComponent } from '../../shared/component/feathericon/feathericon.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService, ListItemOrder, OrderReq, PromotionInfo, StockInfo, UsrRes } from '../../service/app.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-letter-box',
    imports: [CommonModule, RouterModule, FeathericonComponent, NgbModule, FormsModule],
    templateUrl: './letter-box.component.html',
    styleUrls: ['./letter-box.component.scss']
})
export class LetterBoxComponent {
    constructor(private service: ApiService, private modalService: NgbModal) { }
    @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | undefined;
    public cartData = cartItem;
    public active = 1;
    stockinfo: StockInfo[] = [];
    user: UsrRes | null = null;

    async ngOnInit(): Promise<void> {
        this.user = JSON.parse(localStorage.getItem('user') || 'null');
        try {
            this.stockinfo = await this.service.GetStockInfo();
        } catch (error) {
            console.error('API failed:', error);
            alert('API failed');
        }
    }

    formData = {
        stock: '0',
        usrid: '',
        salecode: '',
        nameaddr: '',
        sendaddr: '',
        timecreate: new Date().toISOString().split('T')[0],
        phoneaddr: '',
        remark: '',
        branch: '0',
        list: [] as { name: string, goodid: number, amou: number, unitprice: number, ispro: string }[]
    };
    promotioninfo: PromotionInfo[] = [];

    async pop() {
        try {
            this.promotioninfo = [];
            this.promotioninfo = await this.service.GetPromotion('2024-01-01', '2028-01-01');
        } catch (error) {
            console.error('API failed:', error);
            alert('API failed');
        }
        this.modalService.open(this.secondDialog, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
        });
    }

    async send() {
        console.log(this.formData);
        if (this.formData.stock == '0' || this.formData.list.length == 0) {
            alert('กรุณาระบุข้อมูลให้ครบถ้วน');
        } else {
            const result = {
                stock: this.formData.stock,
                salecode: this.formData.salecode,
                usrid: this.user?.usrcode,
                nameaddr: this.formData.nameaddr,
                sendaddr: this.formData.sendaddr,
                phoneaddr: this.formData.phoneaddr,
                branch: this.formData.branch,
                timecreate: this.formData.timecreate,
                remark: this.formData.remark,
                list: this.formData.list
            };
            const res = new OrderReq(
                result.stock,
                result.salecode,
                result.usrid ?? '',
                result.nameaddr,
                result.sendaddr,
                result.phoneaddr,
                result.branch,
                result.remark,
                result.timecreate,
                result.list.map(item => new ListItemOrder( item.goodid, item.amou, item.unitprice, item.ispro))
            )
            try {
                await this.service.UpdateOrderStock(res);
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    draggable: true
                });
                this.formData = {
                    stock: '0',
                    usrid: '',
                    salecode: '',
                    nameaddr: '',
                    sendaddr: '',
                    timecreate: new Date().toISOString().split('T')[0],
                    phoneaddr: '',
                    remark: '',
                    branch: '0',
                    list: [] as { name: string, goodid: number, amou: number, unitprice: number, ispro: string }[]
                };
                this.ngOnInit();
            } catch (error) {
                console.error('API failed:', error);
                alert('API failed');
            }
        }
    }

    increment(id: number) {
        const item = this.formData.list.find(p => p.goodid === id);
        if (item) {
            item.amou++;
        }
    }

    // ลดจำนวน
    decrement(id: number) {
        const item = this.formData.list.find(p => p.goodid === id);
        if (item && item.amou > 1) {
            item.amou--;
        }
    }

    // ลบ
    removeItem(id: number) {
        this.formData.list = this.formData.list.filter(p => p.goodid !== id);
    }

    addProduct(item: any) {
        const exists = this.formData.list.find(p => p.goodid === item.id && p.ispro === '0');
        if (!exists) {
            this.formData.list.push({
                name: item.goodname,
                goodid: item.id,
                unitprice: item.unitprice,
                amou: 1,
                ispro: '0',
            });
        }
    }
    addPromotion(item: any) {
        const exists = this.formData.list.find(p => p.goodid === item.id && p.ispro === '1');
        if (!exists) {
            this.formData.list.push({
                name: item.name,
                goodid: item.id,
                unitprice: item.totalprice,
                amou: 1,
                ispro: '1'
            });
        }
    }

    get totalPrice(): number {
        return this.formData.list.reduce((sum, item) => {
            const unit = Number(item.unitprice) || 0;
            const qty = Number(item.amou) || 0;
            return sum + (unit * qty);
        }, 0);
    }



}
