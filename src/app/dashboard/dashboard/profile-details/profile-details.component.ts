import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


import { AuthService } from '../../../services/auth.service';
import { LoggedUser } from '../../../modal/loggedUser.modal';

@Component({
  selector: 'profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

user : LoggedUser;
imageUrl: string;

  constructor(private authService : AuthService, private router : Router) { }

  gotoHome(){
  	this.router.navigateByUrl('')
  }

  async logOut(){
  	await this.authService.LogOut()
  	this.router.navigateByUrl('')

  }

  ngOnInit() {
  	this.user = JSON.parse(localStorage.getItem('user'))
  	console.log(this.user)
  	this.imageUrl = this.user.photoURL
  }

}
 