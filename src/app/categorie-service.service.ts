import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icategorie } from 'src/assets/categorie';
import {map} from'rxjs/operators';
import { Category } from './models/Category.model';
//import { Product } from './models/prodcut';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  private baseUrl = 'http://localhost:8080/api/category/';
  private host = 'http://localhost:8080/api/product/';

  list: any = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
  //get details
  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }

}
