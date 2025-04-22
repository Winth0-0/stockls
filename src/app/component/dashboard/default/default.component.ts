import { Component, OnInit, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdSortableHeader } from '../../../shared/directives/sortable.directive';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RevenueGrowthComponent } from './revenue-growth/revenue-growth.component';
import { ApiService, StockInfo } from '../../../service/app.service';

@Component({
    selector: 'app-default',
    imports: [CommonModule, RevenueGrowthComponent,FormsModule , ReactiveFormsModule, NgbModule],
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
    constructor(private service: ApiService) { }
         stockinfo: StockInfo[] = [];
     
         async ngOnInit(): Promise<void> {
             try {
                 this.stockinfo = await this.service.GetStockInfo();
             } catch (error) {
                 console.error('API failed:', error);
                 alert('API failed');
             }
         }

         exportToExcel(): void {
            const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.stockinfo.map(item => ({
              ID: item.id,
              ProductName: item.goodname,
              GorillaStock: item.stockonhand0,
              KitStock: item.stockonhand1,
              TorStock: item.stockonhand2,
              PRStock: item.stockonhand3,
              DealerStock: item.stockonhand4,
              Other: item.stockonhand5,
              TotalStock: item.stockonhand0 + item.stockonhand1 + item.stockonhand2,
            })));
        
            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Stock');
        
            const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(data, 'StockReport.xlsx');
          }

}
