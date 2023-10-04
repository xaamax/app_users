import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  totalItems = 64;
  currentPage = 4;

  constructor() { }

  ngOnInit() {
  }
}
