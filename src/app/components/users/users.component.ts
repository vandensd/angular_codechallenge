import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { NotificationsService } from 'angular2-notifications';

import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService, private notifications: NotificationsService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  onDelete(index: number) {
    // Call the api service method to delete (need to add yet)
    this.userService.deleteUser(this.users[index])
      .subscribe(simpleResponse => {
        if (simpleResponse.success) {
          this.notifications.success('Success', 'User was removed successfully');
        }
      });

    this.users.splice(index, 1);
  }

}
