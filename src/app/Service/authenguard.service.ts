import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenguardService  implements CanActivate{

  constructor(private authen:AuthenticationService,private router:Router) { }
  canActivate() {
    if(this.authen.isLoggedIn()) {
       return true;
  }else{
    this.router.navigate(['/admin']);
    return false;
  }
}
}
