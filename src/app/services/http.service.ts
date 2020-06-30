import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { }

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }
url = 'https://localhost:4200/api'
  SessionLogin(token){
  	let _url = this.url + '/Sessionlogin'
  	return this.http.post(_url, token)
  }
}
