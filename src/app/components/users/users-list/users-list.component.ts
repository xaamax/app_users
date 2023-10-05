import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServices } from 'src/app/services/user-services.service';
import { User } from '@app/models/user';
import { PaginatedResponse, Pagination } from '@app/models/pagination';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() fields = [
    { key: 'picture', label: 'PICTURE', type: 'image' },
    { key: 'firstName', label: 'FIRST NAME' },
    { key: 'lastName', label: 'LAST NAME' },
    { key: 'title', label: 'TITLE' },
  ];

  public users: User[] = [];
  public pagination = {} as Pagination;

  constructor(private api: UserServices) {}

  handleUsers(event: any){
    this.getUsers();
  }

  ngOnInit() {
    this.pagination = {
      page: 1,
      limit: 5,
      total: 1,
    } as Pagination;

    this.getUsers();
  }

  public getUsers(): void {
    this.api.get(this.pagination.page, this.pagination.limit).subscribe({
      next: (res: PaginatedResponse<User[]>) => {
        this.users = res.data['data'];
        this.pagination.limit = res.data['limit'];
        this.pagination.page = res.data['page'];
        this.pagination.total = res.data['total'];
      },
    });
  }
}
