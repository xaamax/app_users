import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from '@app/models/pagination';
import { User } from '@app/models/user';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() fields;
  @Input() items;
  @Input() propsPagination;
  public pagination = {} as Pagination;

  itemsPerPage: number[] = [5, 10, 20, 25];

  @Output() handlePagination = new EventEmitter<string>();
  @Output() handleItemsPerPage = new EventEmitter<string>();

  public changeItems(event: any): void {
    this.handleItemsPerPage.emit('handleItems');
  }

  public pageChanged(event: PageChangedEvent): void {
    this.pagination.page = event.page;
    this.handlePagination.emit('handleItems');
  }

  constructor () {}

  ngOnInit() {
    this.pagination = this.propsPagination;
  }
}
