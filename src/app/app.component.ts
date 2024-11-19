import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Component/login/login.component";
import { ItemsComponent } from "./Component/items/items.component";
import { HomeComponent } from "./Component/home/home.component";
import { RouterModule } from '@angular/router';
import { AdminComponent } from "./Component/admin/admin.component";
import { CartComponent } from "./Component/cart/cart.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent, CartComponent,RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ShoppingCard';
}
