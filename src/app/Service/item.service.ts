import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../Models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'https://localhost:8080/item';
  constructor(private httpClient:HttpClient) { }
  
  getItems() : Observable<Items[]>{
    return this.httpClient.get<Items[]>(this.apiUrl);
  }
 /*  getItemById(id:number): Observable<Items> 
  {
    return this.httpClient.get(`${this.apiUrl}/${id}`);

  } */
}
