import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CustomerauthenticationService } from './customerauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthguardService implements CanActivate {

  constructor(private authen:CustomerauthenticationService,private router:Router) { }
  canActivate() {
    if(this.authen.isLoggedIn()) {
       return true;
  }else{
    this.router.navigate(['/customer']);
    return false;
  }
}
}
