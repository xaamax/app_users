import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pagination } from '@app/models/pagination';
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
  public input_search = '';

  public set setInputSearch(value: string) {
    this.input_search = value;
    this.handleSearchField.emit(this.input_search);
  }

  @Output() handlePagination = new EventEmitter<string>();
  @Output() handleItemsPerPage = new EventEmitter<string>();
  @Output() handleSearchField = new EventEmitter<string>();

  constructor () {}


  public changeItems(event: any): void {
    this.handleItemsPerPage.emit('handleItems');
  }

  public pageChanged(event: PageChangedEvent): void {
    this.pagination.page = event.page;
    this.handlePagination.emit('handleItems');
  }

  ngOnInit() {
    this.pagination = this.propsPagination;
  }
}
