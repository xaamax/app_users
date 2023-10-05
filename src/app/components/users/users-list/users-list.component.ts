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
    {
      key: 'actions',
      label: 'ACTIONS',
      buttons: [
        { class: 'primary', icon: 'eye', action: 'details' },
        { class: 'warning', icon: 'pen', action: 'edit' },
        { class: 'danger', icon: 'trash', action: 'remove' },
      ],
    },
  ];

  public users: User[] = [];
  public usersFull: User[] = [];
  public usersFilter: User[] = [];
  public pagination = {} as Pagination;
  private search = '';
  private totalSize: number;

  constructor(private api: UserServices) {}

  ngOnInit() {
    this.pagination = {
      total: 1,
      page: 1,
      limit: 5,
    } as Pagination;

    this.getUsers();
  }

  btnClick(event: any) {
    const { action, id } = event;

    switch (action) {
      case 'details':
        alert(`action: ${action} | userID: ${id}`);
        break;
      case 'edit':
        alert(`action: ${action} | userID: ${id}`);
        break;
      case 'remove':
        alert(`action: ${action} | userID: ${id}`);
        break;

      default:
        break;
    }
  }

  public handleUsers(event: any) {
    this.getUsers();
  }

  public handleSearchField(event: any) {
    this.search = event;
    this.usersFilter = this.search
      ? this.filter_users(this.search)
      : this.users;
  }

  public filter_users(filterBy: string): User[] {
    let filterByLowerCase = filterBy.toLowerCase();
    return this.usersFull.filter(
      (user) =>
        user.firstName.toLowerCase().includes(filterByLowerCase) ||
        user.lastName.toLowerCase().includes(filterByLowerCase)
    );
  }

  public getUsers(): void {
    this.api.getUsers(this.pagination.page, this.pagination.limit).subscribe({
      next: (res: PaginatedResponse<User[]>) => {
        this.users = res.data['data'];
        this.pagination.total = res.data['total'];
        this.totalSize = res.data['total'];
        this.pagination.page = res.data['page'];
        this.pagination.limit = res.data['limit'];
        this.getAllUsers();
      },
    });
  }

  public getAllUsers(): void {
    this.api.getUsers(1, this.totalSize).subscribe({
      next: (res: PaginatedResponse<User[]>) => {
        this.usersFull = res.data['data'];
        this.usersFilter = this.search ? this.usersFull : this.users;
      },
    });
  }
}
