import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileItemComponent } from './file-item/file-item.component';
import { FileManagerSidebarComponent } from './file-manager-sidebar/file-manager-sidebar.component';
import { ApiService, ListItemTran, StockInfo, TranReq, UsrRes } from '../../service/app.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-file-manager',
    imports: [CommonModule, FormsModule],
    templateUrl: './file-manager.component.html',
    styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent {
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

    getStockName(value: string): string {
        const stockMap: Record<string, string> = {
          '0': 'เลือกคลัง',
          'stockonhand0': 'GorillaStock',
          'stockonhand1': "K'KitStock",
          'stockonhand2': "K'TorStock",
          'stockonhand3': 'PR Stock',
          'stockonhand4': 'Dealer Stock',
          'stockonhand5': 'Other'
        };
        return stockMap[value] ?? 'ไม่พบคลัง';
      }


    formData = {
        fromstock: '0' ,
        tostock: '0',
        usrid: '',
        remark: '',
        list: [] as { goodid: number, amou: number }[]
    };
    x =this.formData.fromstock
    async onSave() {
        if (this.formData.fromstock == '0' || this.formData.tostock == '0') {
            alert('กรุณาเลือกคลังสินค้า');
        } else {
            const result = {
                fromstock: this.formData.fromstock,
                tostock: this.formData.tostock,
                usrid: this.user?.usrcode,
                remark: this.formData.remark,
                list: this.stockinfo
                    .filter(item => item.amou && item.amou > 0)
                    .map(item => ({
                        goodid: item.id,
                        amou: item.amou
                    } as ListItemTran))
            };
            const res = new TranReq(
                result.fromstock,
                result.tostock,
                result.usrid ?? '',
                result.remark,
                result.list
            )
            try {
                await this.service.Tranfer(res);
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    draggable: true
                });
                this.router.navigate(['/dashboard/default']);
            } catch (error) {
                console.error('API failed:', error); 
                alert('API failed');
            }
        }
    }

}
