import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../Service/item.service';
import { Items } from '../../Models/items';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  constructor(private router: Router,private itemService:ItemService){};
  item:Items[]=[];
  ngOnInit(){
    this.itemService.getItems().subscribe(data=>{
      this.item = data;
    });
  }

  goToItemList(){
    this.router.navigate(['/addToCart']);
  }


}
