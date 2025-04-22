import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';import { ApiService, ListItemTran, PromotionReq, StockInfo, TranReq, UsrRes } from '../../../service/app.service';
;


@Component({
    selector: 'app-group-chat',
    imports: [CommonModule , FormsModule],
    templateUrl: './group-chat.component.html',
    styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent {
    constructor(private service: ApiService, public router: Router) { }

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
        name: '',
        active: '',
        expire: '',
        totalprice: 0,
        list: [] as { goodid: number, amou: number }[]
    };

    async onSave() {
        if (this.formData.name == '' || this.formData.active == '' || this.formData.expire == '' || this.formData.totalprice == 0) {
            alert('กรุณาเลือกคลังสินค้า');
        } else {
            const result = {
                name: this.formData.name,
                active: this.formData.active,
                expire: this.formData.expire,
                totalprice: this.formData.totalprice,
                usrid: this.user?.usrcode,
                list: this.stockinfo
                    .filter(item => item.amou && item.amou > 0)
                    .map(item => ({
                        goodid: item.id,
                        amou: item.amou
                    } as ListItemTran))
            };
            const res = new PromotionReq(
                result.name,
                result.active,
                result.expire,
                result.totalprice,
                result.list
            )
            try {
                await this.service.SetPromotion(res);
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    draggable: true
                });
                this.formData = {
                    name: '',
                    active: '',
                    expire: '',
                    totalprice: 0,
                    list: [] as { goodid: number, amou: number }[]
                };
                
                this.ngOnInit();
            } catch (error) {
                console.error('API failed:', error);
                alert('API failed');
            }
        }
    }
}
