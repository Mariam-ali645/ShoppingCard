import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { Items } from '../../Models/items';
import  {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{
  
  items: Items[] = [];
  constructor(private itemService:ItemService) { }
  ngOnInit(): void {
   
    this.get();
  }
  get(){
    this.itemService.getItems().subscribe(data=> {
      this.items= data;
    })
    // Clear the form fields after adding an item to the cart;
  }
  delete(id:number){
    this.itemService.DeleteItem(id).subscribe(data=>{
      console.log(data);
      this.get();
      
    });

  }
  

  }
  


