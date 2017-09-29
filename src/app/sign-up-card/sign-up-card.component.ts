import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-card',
  templateUrl: './sign-up-card.component.html',
  styleUrls: ['./sign-up-card.component.css']
})
export class SignUpCardComponent implements OnInit {
  private first_name: string;
  private last_name: string;
  private email: string;
  private password: string;
  private message: string;

  constructor(private data: UserDataService, private router: Router) { }

  submitSignup(){
    this.data.signUp(this.email, this.password, this.first_name, this.last_name)
    .subscribe(
      user =>{
        if (user) {
          this.router.navigate(['/apartments/mine']);
      } else {
        this.message = 'Could not signup with those credentials';
      }
      
      }, 
      e => this.message = 'Ruh Roh ' + e
    );
  }

  ngOnInit() {
    // this.data
    // .signUp(this.email, this.first_name, this.last_name, this.password)
    // .subscribe(
    //   user => this.user = user,
    //   ()=> this.error = 'Could not do a thing'
    // );
  }

}
