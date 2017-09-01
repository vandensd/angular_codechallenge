import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    this.userService.postUser(this.user)
      .subscribe(simpleResponse => {
      if (simpleResponse.success) {
        this.notifications.success("Success", "User was added!");

        this.router.navigate(['/', 'users']);
      }
    });
  }

}
