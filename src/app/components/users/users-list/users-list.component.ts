import { Component, Input, OnInit } from '@angular/core';
import { UserServices } from 'src/app/services/user-services.service';
import { UserResponse } from '@app/models/user';

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
  @Input() users;

  constructor(private api: UserServices) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.api.get().subscribe({
      next: (res: UserResponse) => {
        this.users = res.data;
      },
    });
  }
}
