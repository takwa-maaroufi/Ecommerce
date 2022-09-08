import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { HttpServiceService } from '../http-service.service';
import { Produit } from '../models/produit.model';
import { CartService } from '../service/cart.service';
import { FavorisService } from '../service/favoris.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-fave-product',
  templateUrl: './fave-product.component.html',
  styleUrls: ['./fave-product.component.css']
})
export class FaveProductComponent implements OnInit {
   WishItems:any
   product!:Produit
  constructor( private favorisService: FavorisService, private cartSevice :CartService ,private router:Router,private http:HttpServiceService) { }

  ngOnInit() {
     this.getCartDetailsByUser();
    //below function will be triggerd from when removing and qty  is changing..
    this.favorisService.FavoriServiceEvent.subscribe(data=>{
      this.WishItems =  this.favorisService.getCartOBj();

    });}


    getCartDetailsByUser(){
      this.http.postRequestWithToken("api/wishlist/getCartsByUserId",{}).subscribe((data:any)=>{
        this.WishItems = data;
      },error=>{
        alert("Error while fetching the cart Details");
      })
    }

  remove(cartObj:any){
    if(confirm("Are you sure want to delete..?")){
      let id  = cartObj.id;
      this.favorisService.removeCart(id);
    }
  }

    addCart(cartProductObj:any){
      var cartObj = {
        "productId":cartProductObj.id,
        "qty":"1",
        "price":cartProductObj.price,
        "productName":cartProductObj.productName,
        "imageURL":cartProductObj.imageURL
      }
      this.cartSevice.addCart(cartObj);
      console.log(cartProductObj.id);

    }
}
