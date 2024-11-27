import { Component} from '@angular/core';
import { Items } from '../../Models/items';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../Service/item.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  items:Items=new Items();
  constructor(private itemService:ItemService, private router:Router){}

  saveItem(){
    this.itemService.AddItem(this.items).subscribe(data =>{console.log(data)} );
    this.goToItem();
  }


  onSubmit(){

    this.saveItem();
    
  }

  goToItem(){
    this.router.navigate(['/item']);
  }


}
