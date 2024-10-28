import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AdminComponent } from './Component/admin/admin.component';
import { ItemsComponent } from './Component/items/items.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { CartComponent } from './Component/cart/cart.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path:'home',component: HomeComponent, title: 'Welcome at Home Page'}, 
    {path:'admin',component:AdminComponent, title: 'Welcome at Admin Page'},  
    {path:'items',component:ItemsComponent , title: 'Items'}, 
    {path:'customer',component:CustomerComponent , title: 'Welcome at Customer Page'}, 
    {path:'cart',component: CartComponent, title: 'Cart Items'},
   // {path:'**',component: , title: 'Not found'},
];
