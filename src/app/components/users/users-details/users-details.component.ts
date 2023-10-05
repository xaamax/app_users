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
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css'],
})
export class UsersDetailsComponent implements OnInit {
  title: string;
  _method: string;
  action: string;
  userID = this.routerActive.snapshot.paramMap.get('userID');
  user = {} as User;
  public userForm: FormGroup | any;

  constructor(
    public routerActive: ActivatedRoute,
    public router: Router,
    private userServices: UserServices,
    public formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  inputs: Array<any> = [
    { name: 'firstName', type: 'text', label: 'First Name' },
    { name: 'lastName', type: 'text', label: 'Last Name' },
    { name: 'email', type: 'email', label: 'Email' },
  ];

  ngOnInit() {
    this.actionMode(this.routerActive.snapshot);
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  actionMode(route) {
    let { path } = route.url[1] || route.url[0];
    this.action = path;
    let pathToUpper = path.charAt(0).toUpperCase() + path.slice(1);
    this.title = `${pathToUpper} User`;

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

  reset() {
    if (this.userID) this.details();
    else this.user = {} as User;
  }

  details() {
    this.spinner.show();
    this.userServices.getUser(this.userID).subscribe(
      (user: User) => {
        this.user = { ...user };
        this.userForm.patchValue(this.user);
        this.spinner.hide();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  save() {
    this.spinner.show();
    this.userServices
      .submit(this._method, this.user)
      .subscribe(
        () => {
          alert('Save success!');
          this.router.navigate(['/']);
        },
        (error: any) => {
          alert('Error save.');
          console.log(error);
        },
        () => this.spinner.hide()
      )
      .add(() => this.spinner.hide());
  }
}
