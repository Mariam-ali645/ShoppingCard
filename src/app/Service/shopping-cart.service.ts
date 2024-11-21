import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCart } from '../Models/shopping-cart';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  constructor(private httpClient:HttpClient) { }

  private apiUrl2 = 'http://localhost:8080/shopping';

  getCartItems() : Observable<ShoppingCart[]>{
    return this.httpClient.get<ShoppingCart[]>(`${this.apiUrl2}`); 
   }

   deleteFromShopping(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl2}/${id}`);
   }
   saveToShopping(shoppingCart:ShoppingCart): Observable<ShoppingCart>{
   return this.httpClient.post<ShoppingCart>(`${this.apiUrl2}`, ShoppingCart);

   }
}


