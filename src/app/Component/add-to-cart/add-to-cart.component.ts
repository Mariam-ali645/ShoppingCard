import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../../Models/items';
import { ShoppingCartService } from '../../Service/shopping-cart.service';
import { ShoppingCart } from '../../Models/shopping-cart';
import { ItemService } from '../../Service/item.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
[x: string]: any;

  constructor(private itemService :ItemService,private shoppingCartService: ShoppingCartService, private router: Router){};
  items:Items[]=[];
  cart:ShoppingCart[] = [];
  shoppingCart: ShoppingCart =new ShoppingCart();
  ngOnInit(): void {
    this.get();
  }
  get(){
    this.itemService.getItems().subscribe(data=> {
      this.items= data;
    })
    // Clear the form fields after adding an item to the cart;
  }
  goToCart(){
    // Add the item to the cart
    this.router.navigate(['/cart']);
  }
  saveCart(){
    this.shoppingCartService.saveToShopping(this.shoppingCart).subscribe(data => console.log("Item saved successfully: "+data));
    this.goToCart();
  }

}
