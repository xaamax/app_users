import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/models/user';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserServices } from '@app/services/user-services.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  subtititle: string;
  _method: string;
  userID = this.routerActive.snapshot.paramMap.get('userID');
  user = {} as User;
  public userForm: FormGroup|any;

  constructor(
    public routerActive: ActivatedRoute,
    public router: Router,
    private userServices: UserServices,
    public formBuilder: FormBuilder,
  ) {}

  inputs : Array<any> = [
    {name:"firstName", type:"text", label:"First Name"},
    {name:"lastName", type:"text", label:"Last Name"},
    {name:"email", type:"email", label:"Email"}
  ]

  ngOnInit() {
    this.actionMode(this.routerActive.snapshot);
    this.userForm = new FormGroup({
      'firstName' : new FormControl(),
      'lastName' : new FormControl(),
      'email' : new FormControl()
    })
  }

  actionMode(route) {
    let { path } = route.url[1] || route.url[0];
    let pathToUpper = path.charAt(0).toUpperCase() + path.slice(1);
    this.subtititle = `${pathToUpper} user`;

    if (this.userID) this.details();

    switch (path) {
      case 'details':
        this._method = 'get';
        break;
      case 'delete':
        this._method = 'delete';
        break;
      case 'edit':
        this._method = 'put';
        break;
      default:
        this._method = 'post';
    }
  }

  details() {
    this.userServices.getUser(this.userID).subscribe(
      (user: User) => {
        this.user = { ...user };
        this.userForm.patchValue(this.user);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
