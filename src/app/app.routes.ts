import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './Component/home/home.component';
import { AdminComponent } from './Component/admin/admin.component';
import { ItemsComponent } from './Component/items/items.component';
import { CustomerComponent } from './Component/customer/customer.component';
import { CartComponent } from './Component/cart/cart.component';
import { AddItemComponent } from './Component/add-item/add-item.component';
import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';
import { UpdateItemComponent } from './Component/update-item/update-item.component';
import { AuthenguardService } from './Service/authenguard.service';
import { CustomerauthguardService } from './Service/customerauthguard.service';

export const routes: Routes = [
    {path:'item',component:ItemsComponent,canActivate:[AuthenguardService]},
    {path:'shopping' ,component: CartComponent,canActivate: [CustomerauthguardService]},
    {path:'addItem' ,component: AddItemComponent,canActivate:[AuthenguardService]},
    {path :'home',component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path :'admin',component: AdminComponent},
    {path : 'customer',component: CustomerComponent},
    {path :'addToCart',component: AddToCartComponent,canActivate: [CustomerauthguardService]},
    {path:'updateItem/:id',component: UpdateItemComponent,canActivate:[AuthenguardService]},
    
];
