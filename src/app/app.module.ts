import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import {environment} from '../environments/environment';

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
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 