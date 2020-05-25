import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user_pic;
user_name;
token;
  constructor(private service : AuthService) { }

  LogOut(){
  	this.service.LogOut()
  	
  }

  ngOnInit() {
  	this.user_pic = localStorage.getItem('img')
  	this.user_name = localStorage.getItem('name')
  	this.token = localStorage.getItem('token')
  }

}
