import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { Items } from '../../Models/items';
import  {FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/authentication.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit{
  
  id:number = 0;
  item: Items=new Items();
  items: Items[] = [];

  constructor(private itemService:ItemService,private router:Router,private authe:AuthenticationService) { }
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
  update(id:number){
    this.router.navigate(['updateItem',id]);
  }
  
  
 

  }
  


