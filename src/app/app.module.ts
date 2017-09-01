import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd Party Modules
import { SimpleNotificationsModule } from 'angular2-notifications';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ManageComponent } from './components/manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    AddUserComponent,
    EditUserComponent,
    NavbarComponent,
    ViewUserComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
