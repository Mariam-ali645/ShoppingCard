import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenguardService  implements CanActivate{

  constructor(private adminauthen:AuthenticationService,private router:Router) { }
  canActivate() {
    if(this.adminauthen.isLoggedIn()) {
       return true;
  }else{
    this.router.navigate(['/admin']);
    return false;
  }
}
}
