import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import 'firebase/auth';
// import { AngularFireAuth} from '@angualr/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: User;
  constructor( public afAuth : AngularFireAuth) {

   }

// https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a  

  FacebookLogin(){
  	return this.afAuth.signInWithPopup(new auth.FacebookAuthProvider())
  	
  }
  LogOut(){
  	this.afAuth.signOut()
  	localStorage.removeItem('token')
  }
}
