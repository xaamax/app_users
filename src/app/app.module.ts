import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

/** COMMON */
import { ContentHeaderComponent } from './common/content-header/content-header.component';
import { TableComponent } from './common/table/table.component';
/** COMPONENTS */
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';
/** SERVICES */
import { UserServices } from './services/user-services.service';

import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
      AppComponent,
      ContentHeaderComponent,
      TableComponent,
      UsersComponent,
      UsersListComponent,
      UsersDetailsComponent
    ],
    imports: [
      BrowserModule,
      TooltipModule.forRoot(),
      PaginationModule.forRoot(),
      NgxSpinnerModule,
      FormsModule,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule
    ],
    providers: [
      UserServices
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
