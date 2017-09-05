import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Input() readOnly: boolean;
  @Output() onDelete = new EventEmitter<true>();

  constructor() { }

  ngOnInit() {
  }

  deleteUser() {
    this.onDelete.emit(true);
  }

}
