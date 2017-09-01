import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageComponent } from './components/manage/manage.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const appRoutes: Routes = [
    { path: '', component: ManageComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/add', component: AddUserComponent },
    { path: 'users/edit/:id', component: EditUserComponent },
    { path: 'users/view/:id', component: ViewUserComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}