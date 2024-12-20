import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthenticationService {

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
  isCustomerLoggedIn(){
    console.log('user logged in');
    return sessionStorage.getItem('username')!= null;
  }

  customerlogout(){
    sessionStorage.removeItem('username');
    console.log('user logged out');
  }
}
