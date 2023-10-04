import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** COMMON */
import { ContentHeaderComponent } from './common/content-header/content-header.component';
import { TableComponent } from './common/table/table.component';
/** COMPONENTS */
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
/** SERVICES */
import { UserServices } from './services/user-services.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent,
      ContentHeaderComponent,
      TableComponent,
      UsersComponent,
      UsersListComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
  ],
  providers: [
    UserServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
