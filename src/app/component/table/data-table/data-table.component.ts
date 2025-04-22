import { Component, QueryList, ViewChildren } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TableService } from '../../../shared/services/table.service';
import { supportDB } from '../../../shared/interface/support';
import { NgbdSortableHeader, SortEvent } from '../../../shared/directives/sortable.directive';
import { SUPPORTDB } from '../../../shared/data/table/data-table/SupportTdb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-data-table',
    imports: [CommonModule, FormsModule, NgbdSortableHeader, ReactiveFormsModule, NgbModule],
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    providers: [TableService, DecimalPipe]
})
export class DataTableComponent {

  public  tableData$: Observable<supportDB[]>;
  public tableData = SUPPORTDB;
  public  Data: supportDB[];
  public  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TableService) {
    this.tableData$ = service.supportdata$;
    this.total$ = service.total$;
  }

  get filteredData(): supportDB[] {
    return this.tableData.filter((person: { name: string; position: string; office: string; email: string; }) => {
      return person.name.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.position.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.office.toLowerCase().includes(this.service.searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(this.service.searchTerm.toLowerCase())
    });

  }


  getStartingIndex(): number {
    if (this.filteredData.length === 0) {
      return 0;
    }
    return (this.service.page - 1) * this.service.pageSize + 1;
  }

  getEndingIndex(): number {
    const endIndex = this.service.page * this.service.pageSize;
    return Math.min(endIndex, this.filteredData.length);
  }

  ngOnInit() {
    this.tableData$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
