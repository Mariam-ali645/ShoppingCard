import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { AdminComponent } from './Component/admin/admin.component';
import { ItemsComponent } from './Component/items/items.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { CartComponent } from './Component/cart/cart.component';
import { AddItemComponent } from './Component/add-item/add-item.component';
import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';

export const routes: Routes = [
    {path:'item',component:ItemsComponent},
    {path:'shopping' ,component: CartComponent},
    {path:'addItem' ,component: AddItemComponent},
    {path :'home',component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path :'admin',component: AdminComponent},
    {path : 'customer',component: CustomerComponent},
    {path :'addToCart',component: AddToCartComponent},
    
];
