import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpServiceService} from '../http-service.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartServiceEvent = new BehaviorSubject({});
  public CmdServiceEvent = new BehaviorSubject({});
  public proerviceEvent = new BehaviorSubject({});

  cartQty = 0;
  cartObj:any=[];
  cmdtaille=0;
  commandes:any=[];
 public cartTotalPrice :any;
 userId:any
 orderId:any
products:any=[];
  constructor(private http:HttpServiceService, private httpclient:HttpClient) {
this.getOrdersByUser();
    this.getCartDetailsByUser();
   }
   private baseUrl="localhost:8080/api/order/"

   getCartDetailsByUser(){
     this.http.postRequestWithToken("api/addtocart/getCartsByUserId",{}).subscribe((data:any)=>{
      //alert("Error while fetching the cart Details");
      this.cartObj = data;
      this.cartQty = data.length;
     this.cartTotalPrice = this.getTotalAmounOfTheCart();
      this.cartServiceEvent.next({"status":"completed"})//emitter
     },error=>{
       alert("Error while fetching the cart Details");
     })
   }


  addCart(obj:any){
    //this.cartServiceEvent.next({"status":"completed"})//emitter
    var request  = {
      "productId":obj.productId,
      "qty":obj.qty,
      "price":obj.price,
      "imageURL":obj.imageURL,
      "productName":obj.productName
    }
    this.http.postRequestWithToken("api/addtocart/addProduct",request).subscribe((data:any)=>{
      this.getCartDetailsByUser()
    },
    error=>{
      //if the products is already in cart
        alert("Error in AddCart API "+error.message);
    })
  }
  addCartWish(obj:any){
    //this.cartServiceEvent.next({"status":"completed"})//emitter
    var request  = {
      "productId":obj.productId,
      "qty":obj.qty,
      "price":obj.price,
      "imageURL":obj.imageURL,
      "productName":obj.productName
    }
    this.http.postRequestWithToken("api/addtocart/addWish",request).subscribe((data:any)=>{
      this.getCartDetailsByUser()
    },
    error=>{
      //if the products is already in cart
        alert("Error in AddCart API "+error.message);
    })
  }
  getCartOBj(){
    return this.cartObj;
  }
  getCmd(){
    return this.commandes
  }
  getTotalAmounOfTheCart(){
    let obj = this.cartObj;
    let totalPrice  = 0;

    for(var o in obj ){
      totalPrice = totalPrice +parseFloat(obj[o].price);
    }

    return totalPrice.toFixed(2);
  }
  getQty(){
    return this.cartQty;
  }


  removeCart(cartId:any){
      var request = {
          "productId":"dummy_val",
          "cartId":cartId,
      }
      this.http.postRequestWithToken("api/addtocart/removeProductFromCart",request).subscribe((data:any)=>{
          this.getCartDetailsByUser();
      },error=>{
        alert("Error while fetching the cart Details");
      })
  }

  removeAllCart(userId:any){
    var request = {
        "userId":userId,
    }
    this.http.postRequestWithToken("api/addtocart/removeProductsFromCart",request).subscribe((data:any)=>{
        this.getCartDetailsByUser();
    })
}
//historique
getByOrderId(orderId:string): Observable<any[]> {
  return this.httpclient.get<any[]>(`${this.baseUrl}productCheckoutCart/${orderId}`);
}



getOrdersByUser(){
  this.http.postRequestWithToken("api/order/getOrdersByUserId",{}).subscribe((data:any)=>{
   //alert("Error while fetching the cart Details");
   this.commandes = data;
   this.CmdServiceEvent.next({"status":"completed"})//emitter
  },error=>{
    alert("Error while fetching the cart Details");
  })
}


getOrdersByordr(){
  this.http.postRequestWithToken("api/order/getOrdersByUserId",{}).subscribe((data:any)=>{
   //alert("Error while fetching the cart Details");
   this.commandes = data;
   this.CmdServiceEvent.next({"status":"completed"})//emitter
  },error=>{
    alert("Error while fetching the cart Details");
  })
}

}
