import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("assets/data/produits.json")
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  getMemeCat(){
    return this.http.get<any>("assets/data/memeCat.json")
    .pipe(map((res:any)=>{
      return res;
    }))

  }
  getfaves(){
    return this.http.get<any>("assets/data/produits.json")
    .pipe(map((fave:any)=>{
      return fave;
    }))

  }

}
