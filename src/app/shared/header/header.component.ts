import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user;
user_name;
token;
public isMenuCollapse = true;
  constructor(private service : AuthService) { }

  LogOut(){
  	this.service.LogOut()
  	
  }

  ngOnInit() {
  	this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
  	// this.user_name = localStorage.getItem('name')
  	// this.token = localStorage.getItem('token')
  }

}
