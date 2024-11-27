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
  private apiUrl2 = 'http://localhost:8080/item/id';
  
  getItems() : Observable<Items[]>{
    return this.httpClient.get<Items[]>(`${this.apiUrl}`);  }

  AddItem(item : Items) : Observable<Items>{
      return this.httpClient.post<Items>(`${this.apiUrl}`,item);
    }
    
  DeleteItem(id: number) : Observable<Object>
  {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  
  }
  updateItem(id:number,item:Items): Observable<Object>{
    return this.httpClient.put<Items>(`${this.apiUrl}/${id}`,item);
  }
  getItemById(id:number): Observable<Items>{
    return this.httpClient.get<Items>(`${this.apiUrl2}/${id}`);
  }
}

