import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle =  '';
  @Input() icon = 'fa fa-home';
  @Input() btnListar = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userList(): void{
    this.router.navigate([`/users/list`]);
  }

}
