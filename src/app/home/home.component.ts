import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms';


import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { UserState } from '../modal/userState.modal'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
   private authService : AuthService,
   private reqService : HttpService, 
   private router : Router
   ){}


  title = 'screeshots';
  isSelected: boolean = false ;
  imgDetails;
  userDetails;
  user_name;
  screenshot = new FormGroup({
  	image : new FormControl()
  })

  selectedImage($event){
  	this.imgDetails = $event.target.files[0];
  	this.isSelected = true;
  	console.log(this.imgDetails)
  }

  submit(){
  	// console.log('submit clicked',this.imageFile)
  }

//   displayName: "Godswill Omonkhodion"
// email: "officialalphanotion@gmail.com"
// phoneNumber: null
// photoURL: "https://graph.facebook.com/2940864415998937/picture"
// providerId: "facebook.com"
// uid: "2940864415998937"
	
async setUserState(userData){
	try{
		const { displayName, email, phoneNumber, uid, emailVerified } = userData.user

		const userDetails = {
			displayName, 
			email, 
			phoneNumber, 
			photoURL : userData.additionalUserInfo.profile.picture.data.url, 
			uid, 
			emailVerified,
			token: await userData.user.getIdToken()
		}
		localStorage.setItem('user', JSON.stringify(userDetails))
		// console.log(userDetails)
	}
	catch(err){
		console.log(err)
	}
}
  login(){

        this.authService.FacebookLogin()
        .then(result => {
          console.log(result)
        	this.setUserState(result)
        	this.router.navigateByUrl('dashboard')
        	
          
          // let token = (<any>result).credential.accessToken ; << THIS WAS NEEDED TO WORK
          // let img = result.user.photoURL; << THIS WAS NEEDED TO WORK
          // let display_name = result.additionalUserInfo.profile['first_name'];  << THIS WAS NEEDED TO WORK


          // localStorage.setItem('token', token)    << THIS WAS NEEDED TO WORK
          // localStorage.setItem('img', img)   << THIS WAS NEEDED TO WORK
          // localStorage.setItem('name', display_name)   << THIS WAS NEEDED TO WORK
          
          // this.userDetails = result.user;   << THIS WAS NEEDED TO WORK
        })
        // .then(() => {
        //   this.authService.LogOut()
        // })
        .catch(err => console.log(err))
      
  }

  ngOnInit(){
    this.user_name = localStorage.getItem('user')
  	}

}
