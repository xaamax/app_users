import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'users/list', pathMatch: 'full' },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      { path: 'list', component: UsersListComponent },
      { path: 'new', component: UsersDetailsComponent },
      { path: ':userID/details', component: UsersDetailsComponent },
      { path: ':userID/edit', component: UsersDetailsComponent },
      { path: ':userID/delete', component: UsersDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
