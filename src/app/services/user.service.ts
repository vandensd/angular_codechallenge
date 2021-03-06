import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

@Injectable()
export class UserService {
  private usersUrl = environment.apiUrl;
  private userAdded = new Subject();

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.usersUrl + "GetAll")
      .map(res => res.json() as User[]);
  }

  getUser(id: string): Observable<User> {
    return this.http.get(this.usersUrl + "Get/" + id)
      .map(res => res.json() as User);
  }

  postUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl + "Insert", user)
      .map(res => res.json());
  }

  saveUser(user: User): Observable<any> {
    return this.http.post(this.usersUrl + "Save", user)
      .map(res => res.json());
  }

  deleteUser(user: User): Observable<any> {
    return this.http.get(this.usersUrl + "Delete/" + user.id)
      .map(res => res.json());
  }

}
