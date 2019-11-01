import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  getProducts(terms:string){
    const url = `${environment.baseUrl}/search${terms}`;
    return this.http.get(url)
  }
}
