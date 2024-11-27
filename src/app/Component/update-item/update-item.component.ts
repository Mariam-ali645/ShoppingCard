import { Component } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { FormsModule } from '@angular/forms';
import { Items } from '../../Models/items';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-item',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './update-item.component.html',
  styleUrl: './update-item.component.css'
})
export class UpdateItemComponent {

  item:Items=new Items();
  id: number=0;

  constructor(private itemService:ItemService,private route:ActivatedRoute,private router:Router) { }

  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItemById(this.id).subscribe(data =>{
      this.item=data;
    });
    
   }
   goToItem(){
    this.router.navigate(['/item']);

   }
   onSubmit(){
    this.itemService.updateItem(this.id,this.item).subscribe(data=>{
      console.log( data);
      
    });
    this.goToItem();
   
    

   }

}
