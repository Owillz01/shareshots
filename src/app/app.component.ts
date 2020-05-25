import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AuthService } from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	constructor(private authService : AuthService ){}
  title = 'screeshots';
  isSelected: boolean = false ;
  imgDetails;
  userDetails;
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

  login(){
      this.authService.FacebookLogin()
      .then(fb_Res => { 
        this.userDetails = fb_Res;
      })
      .catch(fb_err => {} )
  }
  ngOnInit(){
  	this.authService.FacebookLogin()
    .then(result => {
      const credential = result.credential as firebase.auth.OAuthCredential ;
      // console.log(result)
      let token = credential.accessToken ;
      let img = result.user.photoURL;
      let display_name = result.additionalUserInfo.profile['first_name'];


      localStorage.setItem('token', token)
      localStorage.setItem('img', img)
      localStorage.setItem('name', display_name)
      // this.userDetails = result.
      // console.log('result', display_name)
      this.userDetails = result.user;
    })
    .catch(err => console.log(err))
  }
}
