import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  customerLogin(username: string, password: string){

    if(username == 'customer' && password =='123'){
      sessionStorage.setItem('username',username);
      console.log('hi to your section');
      return true;
    }else{
      console.log('Wrong Credentials');
      return false;
    }
  }

  adminLogin(username2: string, password2: string){

    if(username2 == 'admin' && password2 =='456'){
      sessionStorage.setItem('username2',username2);
      console.log('hi to your section');
      return true;
    }else{
      console.log('Wrong Credentials');
      return false;
    }
  }

  isLoggedIn(){
    console.log('user logged in');
    return sessionStorage.getItem('username2')!= null;
  }

  logout(){
    sessionStorage.removeItem('username2');
    console.log('user logged out');
  }

}
