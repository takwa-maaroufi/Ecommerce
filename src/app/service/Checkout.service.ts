import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';
import { Purchase } from '../models/purchase';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl: string = "http://localhost:8080/api/checkout/purchase";
  requestHeader = new HttpHeaders(
    { 'No-Auth':'True'}
    );

  constructor(private http: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any>{
    return this.http.post<GetResponsePurchase>(this.purchaseUrl,purchase,{headers:this.requestHeader});
    // .pipe(
    //map(response=> response.orderTrackingNumber)
    //)
  }

}

interface GetResponsePurchase{
      orderTrackingNumber: string;
}
