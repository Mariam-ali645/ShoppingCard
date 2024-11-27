import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemService } from '../../Service/item.service';
import { Items } from '../../Models/items';
import { FormsModule } from '@angular/forms';

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

  constructor(private router: Router,private itemService:ItemService){};
  item:Items[]=[];
  ngOnInit(){
  }
  checkLogin(){
    if(this.username=='customer' && this.password=='123'){
      sessionStorage.setItem('customer', this.username);
      this.router.navigate(['/addToCart']);
      return true;
    }else{
      alert('Invalid credentials');
      this.router.navigate(['/home']);
      return false;
    }

  }


}
