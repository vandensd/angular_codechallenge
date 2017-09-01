import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    department: '',
    employeeId: '',
    firstName: '',
    id: '',
    lastName: ''
  };

  private selectedId: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(params => {
        this.selectedId = params['id'];

        this.userService.getUser(this.selectedId)
          .subscribe(user => this.user = user);
      });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.userService.saveUser(this.user)
      .subscribe(simpleResponse => {
        if (simpleResponse.success) {
          this.notifications.success("Success", "User was updated!");

          this.router.navigate(['/', 'users']);
        }
      });
  }

}
