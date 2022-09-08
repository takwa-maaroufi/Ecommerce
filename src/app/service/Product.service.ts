import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Produit } from '../models/produit.model';
import { Souscategory } from '../models/Souscategory.model';

const baseUrl = 'http://localhost:8080/api/product/';

const httpOptions = {
  headers: new HttpHeaders().append('Content-Type', 'multipart/form-data'),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  [x: string]: any;
  private baseUrl = 'http://localhost:8080/api/product/';
  host: string = 'http://localhost:8080/api/product';
  list: any = [];
  id?: any;
  categoryId?:any;
  subCategoryId?: any;
  marqueId?: any;
  image?:File;
  public formData?: FormGroup;
  productId?: any;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }
  createData(
    file: File,
    // id: number,
    description: string,
    categoryId: number,
    name: string,
    codeBarre: string,
    price: number,
    unite: string,
    qte: number,
    available: boolean,
    subCategoryId: number,
    marqueId: number
  ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    // formData.append('id', id.toString());
    formData.append('name', name);
    formData.append('codeBarre', codeBarre);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('unite', unite);
    formData.append('qte', qte.toString());
    formData.append('available', available.toString());
    formData.append('categoryId', categoryId.toString());
    formData.append('subCategoryId', subCategoryId.toString());
    formData.append('marqueId', marqueId.toString());

    const req = new HttpRequest('POST', `${this.baseUrl}upload`, formData, {
      reportProgress: true,
      responseType: 'json',
    });

    return this.http.request(req);
  }

  updateData(
    id: number,
    file: File,
    name: string,
    codeBarre: string,
    price: number,
    description: string,
    unite: string,
    qte: number,
    available: boolean,
    categoryId: number,
    subCategoryId: number,
    marqueId: number
  ): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('id', this.id.toString());
    formData.append('file', file);
    formData.append('name', name);
    formData.append('codeBarre', codeBarre);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('unite', unite);
    formData.append('qte', qte.toString());
    formData.append('available', available.toString());
    formData.append('categoryId', categoryId.toString());
    formData.append('subCategoryId', subCategoryId.toString());
    formData.append('marqueId', marqueId.toString());

    const req = new HttpRequest('PUT',`${this.baseUrl}update/${this.id}`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.http.request(req);
  }
//get details
  getData(id: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}${id}`);
  }
  getProductByCat(categoryName:string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}productCategory/${categoryName}`);
  }
  getProductBySubcat(subcategoryName:string): Observable<Souscategory[]> {
    return this.http.get<Souscategory[]>(`${this.baseUrl}productSubcategory/${subcategoryName}`);
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete/${id}`, {
      responseType: 'text',
    });
  }

  findBynameContaining(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}products?name=${name}`);
  }



}
