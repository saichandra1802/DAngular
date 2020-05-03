import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="https://localhost:44399/api/auth/";
constructor(private http: HttpClient ) { }
jwtHelper= new JwtHelperService();
decodedToken:any;
login(model:any){
  return this.http.post(this.baseUrl+'login',model).pipe(
    map((response:any)=>{
      debugger;
      const user=response;
      if(user){
      localStorage.setItem('token',user.token);
      this.decodedToken=this.jwtHelper.decodeToken(user.token);
      console.log(this.decodedToken);
    }
    })
  )
  
}
Register(model:any){
 return this.http.post(this.baseUrl+'Register',model);
}
loggedIn(){
  const token=localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}


