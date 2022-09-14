import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpServiceService } from '../http-service.service';
import { Produit } from '../models/produit.model';
//import { WishItem } from '../models/show-carts';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  public FavoriServiceEvent = new BehaviorSubject({});
  cartQty = 0;
  cartwish:any=[];

  constructor(private http:HttpServiceService) {

   this.getCartDetailsByUser();

   }

   getCartDetailsByUser(){
    this.http.postRequestWithToken("api/wishlist/getCartsByUserId",{}).subscribe((data:any)=>{
     this.cartwish = data;
     this.FavoriServiceEvent.next({"status":"completed"})//emitter

    },error=>{
      // alert("Error while fetching the cart Details");
    })
  }

  addCartTofavoris(obj:any){
    //this.cartServiceEvent.next({"status":"completed"})//emitter
    var request  = {
      "productId":obj.productId,
      "qty":obj.qty,
      "price":obj.price,
      "imageURL":obj.imageURL,
      "productName":obj.productName
    }
    this.http.postRequestWithToken("api/wishlist/addProduct",request).subscribe((data:any)=>{
      this.getCartDetailsByUser();
    },
    error=>{
      //if the products is already in cart
        alert("Error in wishlist API "+error.message);
    })
  }
  getCartOBj(){
    return this.cartwish;
  }

  getQty(){
    return this.cartQty;
  }


  removeCart(cartId:any){
    var request = {
        "productId":"dummy_val",
        "cartId":cartId,
    }
    this.http.postRequestWithToken("api/wishlist/removeProductFromCart",request).subscribe((data:any)=>{
        this.getCartDetailsByUser();
    },error=>{
      // alert("Error while fetching the cart Details");
    })
}

}

