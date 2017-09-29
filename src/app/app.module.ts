import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApartmentListingsComponent } from './apartment-listings/apartment-listings.component';

import {ApartmentDataService} from './apartment-data/apartment-data.service';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { LoginComponent } from './login/login.component';
import { SessionDataService } from './session-data/session-data.service';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { SignUpCardComponent } from './sign-up-card/sign-up-card.component';
import { UserDataService } from './user-data/user-data.service';

const routes: Route[]= [
  { path: 'login', component: LoginComponent},
  { path: 'my-listings', component: MyListingsComponent},
  { path: 'signup', component: SignUpCardComponent},
  { path: '', component: ApartmentListingsComponent },
  { path: 'deactivations', component: ApartmentDataService},
  { path: 'activations', component: ApartmentDataService}


  
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ApartmentListingsComponent,
    ApartmentDetailComponent,
    LoginComponent,
    MyListingsComponent,
    SignUpCardComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
    

  ],
  providers: [ApartmentDataService, SessionDataService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
