import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartserviceService } from '../cartservice.service';
import { HttpServiceService } from '../http-service.service';
import { CartItem } from '../models/cart-item';
import { Produit } from '../models/produit.model';
import { CartService } from '../service/cart.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartObj : any
  cartQty:any
  obj:any
  cartTotalPrice :any
  pay_type = "cash_on_delivery";
  delivery_address = "";
    constructor(private router:Router,private cartService:CartService,private http:HttpServiceService) { }

  ngOnInit() {
    this.getCartDetailsByUser();
    //below function will be triggerd from when removing and qty  is changing..
    this.cartService.cartServiceEvent.subscribe(data=>{
      this.cartObj =  this.cartService.getCartOBj();
      this.cartQty=this.cartService.cartQty;
      this.cartTotalPrice  = this.cartService.cartTotalPrice;
    });

  }

     incrementQty(F:any,qty:any){

    qty+=1;
      var request = {
      "cartId":F.id,
      "qty":qty,
      "price":((F.price)*qty*(1/(qty-1))).toFixed(3)
    }

    console.log(request);
      this.http.postRequestWithToken("api/addtocart/updateQtyForCart",request).subscribe((data:any)=>{
        this.cartService.getCartDetailsByUser();//for updating in the application..
      },error=>{
        alert("Error while fetching the cart Details");
      })



   }
   decrementQty(F:any,qty:any){

    if(qty>1){
      qty-=1;
    }else{
    qty=1;
    }

    var request = {
      "cartId":F.id,
      "qty":qty,
      "price":((F.price/(qty+1))*(qty))
    }
    console.log(request);

      this.http.postRequestWithToken("api/addtocart/updateQtyForCart",request).subscribe((data:any)=>{
        this.cartService.getCartDetailsByUser();//for updating in the application..
      },error=>{
        alert("Error while fetching the cart Details");
      })

if(qty=1){

}
          }



  getCartDetailsByUser(){
    this.http.postRequestWithToken("api/addtocart/getCartsByUserId",{}).subscribe((data:any)=>{
      this.cartObj = data;
      this.cartTotalPrice = this.getTotalAmounOfTheCart();
    },error=>{
      alert("Error while fetching the cart Details");
    })
  }
getCartQty(){
  let obj=this.cartObj;
  let cartQty=0;
  for(var o in obj ){
    cartQty = cartQty +parseInt(obj[o].qty);

  }
  return cartQty;

}
  getTotalAmounOfTheCart(){
    let obj = this.cartObj;
    let totalPrice  = 0;
    for(var o in obj ){
      totalPrice = totalPrice +parseFloat(obj[o].price);
    }
    return totalPrice.toFixed(2);
  }

  removeCartById(cartObj:any){
    if(confirm("Are you sure want to delete..?")){
      let id  = cartObj.id;
      this.cartService.removeCart(id);
    }
  }
  removeAllCart(){
    if(confirm("Are you sure want to delete..?")){
      let userId:any
      this.cartService.removeAllCart(userId);
    }
  }
  checkoutCart(){
    if(this.delivery_address == ""){
      alert("Delivery address should not be empty");
      return;
    }
    if(this.pay_type == "cash_on_delivery"){
      let request = {
        "total_price":this.cartTotalPrice,

     }
      this.http.postRequestWithToken("api/order/checkout_order",request).subscribe((data:any)=>{
        alert("checkout process completed.Your Order is processed..");
        this.cartService.getCartDetailsByUser();
        this.router.navigate(['']);
     },error=>{
        alert("Error while fetching the cart Details");
      })

    }else{
        alert("Payment Integration is not yet completed.")
    }
  }
}

