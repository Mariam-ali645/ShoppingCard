import { Component } from '@angular/core';
import { ShoppingCartService } from '../../Service/shopping-cart.service';
import { ShoppingCart } from '../../Models/shopping-cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 
  carts:ShoppingCart[]=[];
  constructor(private shoppingCartService:ShoppingCartService){};
  ngOnInit(){
    this.getCart();
  }
  getCart(){

    return this.shoppingCartService.getCartItems().subscribe(data=>{

      this.carts=data;
    })
  }
  

}
