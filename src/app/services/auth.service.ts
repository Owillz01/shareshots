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
  	// As httpOnly cookies are to be used, do not persist any state client side.
	// auth().setPersistence(auth.Auth.Persistence.NONE);
   }


// https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a  
// https://www.positronx.io/full-angular-7-firebase-authentication-system/
  FacebookLogin(){
  	// this.afAuth.setPersistence(auth.Auth.Persistence.NONE)
  	// .then( () => {
  		return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
  	// })
  	
  }

    // "@angular/fire": "^5.4.2",
  CheckAuthState(){
    console.log(this.afAuth.auth.currentUser)
    return this.afAuth.auth.currentUser
    // this.afAuth.auth.onAuthStateChanged(user => console.log('User>>>',user))
  }
  LogOut(){ 
  	this.afAuth.auth.signOut()
  	localStorage.removeItem('user')
  }
}
