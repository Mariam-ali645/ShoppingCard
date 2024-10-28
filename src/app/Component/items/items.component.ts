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
  filteredItems: Items[] = []; // Filtered list for search results
  searchText: string = ''  // Search input field;
  constructor(private itemService:ItemService) { }
  ngOnInit(): void {
   
    this.getItems();
  }
  getItems() {
    this.itemService.getItems().subscribe((x) => {
      this.items= x;
    });
  }
  addToCart(item: Items) {
    console.log('Item added to cart:', item);
    // Here you would handle adding the item to the cart (e.g., calling a service)
  }
  onSearch() {
    if (this.searchText) {
      this.filteredItems = this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredItems = this.items; // Reset to original list if search is cleared
    }
  }
  

}
