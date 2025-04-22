import { Search } from './../../search-result/search-result.routes';
import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService, PromotionInfo, PromotionListItem } from '../../../service/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
@Component({
    selector: 'app-private-chat',
    imports: [CommonModule, FormsModule],
    templateUrl: './private-chat.component.html',
    styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent implements OnInit {
    constructor(private service: ApiService,private modalService: NgbModal) { }
    async ngOnInit(): Promise<void> {
        try {
            this.promotioninfo = await this.service.GetPromotionNow();
        } catch (error) {
            console.error('API failed:', error);
            alert('API failed');
        }
    }
    @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | undefined;
    from: string = '';
    to: string = '';
    promotioninfo: PromotionInfo[] = [];
    promotionlist : PromotionListItem[] = [];

    async Search() {
        try {
            this.promotioninfo = await this.service.GetPromotion(this.from, this.to);
        } catch (error) {
            console.error('API failed:', error);
            alert('API failed');
        }
    }

    exportToExcel(): void {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.promotioninfo.map((item, index) => ({
          No: index + 1,
          'Promotion Name': item.name,
          Active: new Date(item.active).toLocaleString(),
          Expire: new Date(item.expired).toLocaleString(),
          'Total Price': item.totalprice,
        })));
    
        const workbook: XLSX.WorkBook = {
          Sheets: { 'Promotion List': worksheet },
          SheetNames: ['Promotion List'],
        };
    
        const excelBuffer: any = XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        });
    
        const data: Blob = new Blob([excelBuffer], {
          type:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
        });
    
        FileSaver.saveAs(data, `promotion-info_${new Date().toISOString().slice(0, 10)}.xlsx`);
      }

    formatDateTime(dateStr: string): string {
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนนับจาก 0
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}/${month}/${year}(${hours}:${minutes})`;
      }

    async pop(id : number) {
        try {
            this.promotionlist = [];
            this.promotionlist = await this.service.GetPromotionList(id);
        } catch (error) {
            console.error('API failed:', error);
            alert('API failed');
        }
        this.modalService.open(this.secondDialog, {
            ariaLabelledBy: 'modal-basic-title',
            size: 'lg'
        });
    }

}

