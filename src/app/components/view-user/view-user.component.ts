import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute
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

}
