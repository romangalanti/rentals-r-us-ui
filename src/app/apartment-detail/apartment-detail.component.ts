import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from "../apartment-data/apartment-data.service"
import { User } from '../user';
import { SessionDataService } from '../session-data/session-data.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

  @Input()
  apartment: Apartment;
  error:string;
  message: String;
  currentUser = new User();

  constructor(private data:ApartmentDataService, private service: SessionDataService) { }

  getcurrentUser(){
    return this.currentUser = this.service.getCurrentUser();
  }
  get userIsOwner(){
    return this.getcurrentUser() && this.getcurrentUser().id === this.apartment.user_id;
  }

  activateListing(apartment: Apartment){
    this.data.activate(this.apartment).subscribe(
      apartments => {
        this.apartment.is_active = true;
      },
      e => this.message = 'Ruh Roh ' + e
    );

  }

  deactivateListing(apartment: Apartment){
    this.data.deactivate(this.apartment).subscribe(
      apartments => {
        this.apartment.is_active = false;
      },
      e => this.message = 'Ruh Roh ' + e
    );
  }

  likeListing(apartment: Apartment){

  }


  ngOnInit() {
    
  }

}
