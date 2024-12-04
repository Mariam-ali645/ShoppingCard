import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  

  adminLogin(username: string, password: string){

    if(username == 'admin' && password =='456'){
      sessionStorage.setItem('username',username);
      console.log('hi to your section');
      return true;
    }else{
      console.log('Wrong Credentials');
      return false;
    }
  }

  isLoggedIn(){
    console.log('user logged in');
    return sessionStorage.getItem('username')!= null;
  }

  logout(){
    sessionStorage.removeItem('username');
    console.log('user logged out');
  }

}
