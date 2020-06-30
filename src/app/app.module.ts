import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { DashboardModule } from './dashboard/dashboard.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DetailsComponent } from './details/details.component';
import { SharedModule } from './shared/shared.module';
import {environment} from '../environments/environment';
import { ImageInfoComponent } from './image-info/image-info.component';
import { HomeComponent } from './home/home.component';

// const config = {
//       apiKey: "AIzaSyBdwIAUOnPK3I2DYd1Nct_V919JRHdfNMo",
//       authDomain: "screenshot-27eb7.firebaseapp.com",
//       databaseURL: "https://screenshot-27eb7.firebaseio.com",
//       projectId: "screenshot-27eb7",
//       storageBucket: "screenshot-27eb7.appspot.com",
//       messagingSenderId: "919224712506",
//       appId: "1:919224712506:web:9e6c46cb323523175be403",
//       measurementId: "G-RZKGTG9J3W"
    
//   }

@NgModule({
  declarations: [
    AppComponent,
    ImageInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DashboardModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
    cookieName: 'XSRF-TOKEN',
    headerName: 'CSRF-Token',
  }),
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 