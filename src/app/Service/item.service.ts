import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../Models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  
  constructor(private httpClient:HttpClient) { }
  private apiUrl = 'http://localhost:8080/item';
  
  getItems() : Observable<Items[]>{
    return this.httpClient.get<Items[]>(`${this.apiUrl}`);  }

  AddItem(item : Items) : Observable<Items>{
      return this.httpClient.post<Items>(`${this.apiUrl}`,item);
    }
}
