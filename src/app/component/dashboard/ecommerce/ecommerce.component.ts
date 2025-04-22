import { item } from './../../../shared/data/ui-kits/helper-classes';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as chartData from '../../../shared/data/dashboard/default/default-chart';
import { CommonModule } from '@angular/common';
import { ApiService, OrderInfo, OrderListItem } from '../../../service/app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-ecommerce',
    imports: [CommonModule, FormsModule ],
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  constructor(private service: ApiService,private modalService: NgbModal) { }
  async ngOnInit(): Promise<void> {
    try {
      this.OrderInfo = await this.service.GetOrderNow();
  } catch (error) {
      console.error('API failed:', error);
      alert('API failed');
  }
  }
    @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | undefined;

      from: string = '';
      to: string = '';
      OrderInfo: OrderInfo[] = [];
      OrderListItem : OrderListItem[] = [];
      order : OrderInfo | null = null;
      
      formatDateTime(dateStr: string): string {
        const date = new Date(dateStr);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // เดือนนับจาก 0
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}/${month}/${year}(${hours}:${minutes})`;
      }

      async Search() {
          try {
              this.OrderInfo = await this.service.GetOrder(this.from, this.to);
          } catch (error) {
              console.error('API failed:', error);
              alert('API failed');
          }
      }
  
      async pop(item: OrderInfo) {
        this.order = null
        this.order = item;
          try {
              this.OrderListItem = [];
              this.OrderListItem = await this.service.GetOrderList(item.ordernumb);
          } catch (error) {
              console.error('API failed:', error);
              alert('API failed');
          }
          this.modalService.open(this.secondDialog, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'lg'
          });
      }
      exportOrderTableToExcel(): void {
        const table = document.querySelector('.data-striped') as HTMLTableElement;
        if (!table) return;
    
        const workbook: XLSX.WorkBook = XLSX.utils.table_to_book(table, { sheet: 'Orders' });
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
        saveAs(data, 'OrderInfo.xlsx');
      }

}
