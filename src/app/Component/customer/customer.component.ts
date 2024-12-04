import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from '../../Service/item.service';
import { Items } from '../../Models/items';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../Service/authentication.service';
import { CustomerauthenticationService } from '../../Service/customerauthentication.service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  username: string='';
  password: string='';
  inValid= false;

  constructor(private router: Router,private itemService:ItemService, private authen:CustomerauthenticationService){};
  item:Items[]=[];
  ngOnInit(){
  }
  checkLogin(){
    if(this.authen.customerLogin(this.username,this.password)){
      
      this.router.navigate(['/addToCart']);
     this.inValid=false;
    }else{
      alert('Invalid credentials');
      this.router.navigate(['/home']);
      this.inValid=true;
    }

  }


}
