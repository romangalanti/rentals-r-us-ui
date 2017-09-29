import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserDataService {

  baseUrl = "http://localhost:4567/api/users";
  options = { withCredentials: true };

  constructor(private http: Http) { 
    
  }

signUp(email: string, password: string, first_name: string, last_name: string){
  const payload = {email, password, first_name, last_name};
  return this.http
    .post(this.baseUrl, payload, this.options)
    .map(response => response.status === 201 ? response.json(): null)
    
}

}

