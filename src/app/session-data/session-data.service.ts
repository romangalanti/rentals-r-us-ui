import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';


@Injectable()
export class SessionDataService {

  baseUrl = "http://localhost:4567/api/sessions";
  options = { withCredentials: true };

  userChanged: Subject<User>;
  currentUser: User;

  constructor(private http: Http) { 
    this.userChanged = new Subject<User>();
  }

  getCurrentUser(): User{
    return this.currentUser;
  }

  login(email: string, password: string): Observable<User> {
    const payload = { email, password };
    return this.http
      .post(this.baseUrl, payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)  //ternary operator (this is an if/else statement--also there is an implicit return happening here)
      .do(user => this.userChanged.next(user))
      .do(user => this.currentUser = user);

  }

  logout(): Observable<User>{
    return this.http.delete(`${this.baseUrl}/mine`, { withCredentials: true })
    .map(response => null) //to do: finish the failure
    .do(user => this.userChanged.next(user))  //broadcasts that something happened
    .do(() => this.currentUser = null);
  }
}
