import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Cart } from '../models/Caddy.model';
import { CartItem } from '../models/cart-item';
import { ItemProduct } from '../models/ItemProduct.model';
import { User } from '../models/user';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  cartItems: CartItem[] = [];

  totalQuantityValue: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  totalPrice: Subject<number> = new Subject<number>();
  withLivraison: Subject<number> = new Subject<number>();

  public search = new BehaviorSubject<string>("");
  public cartItemList : any =[];

  public productList = new BehaviorSubject<any>([]);

  constructor() { }




  logCartData(totalPriceValue: number, totalQuantityValue: number, withLivraison: number) {
    console.log('-----------the cart content--------')
    for(let tempCartItem of this.cartItems){
      let subTotalPrice = tempCartItem.price * tempCartItem.quantity;
      console.log(`Name: ${tempCartItem.name}, quantity: ${tempCartItem.quantity}, price: ${tempCartItem.price}, subTotalPrice: ${subTotalPrice} `);
      console.log(`totalPrice: ${totalPriceValue}, totalQuantity: ${totalQuantityValue},withLivraison : ${withLivraison} `);
    }
  }

  decrementQuantity(theCartItem: CartItem) {
     theCartItem.quantity--;
     if(theCartItem.quantity == 0){
       this.removeCartItem(theCartItem);
     }else{
       this.computeCartTotals();
     }
  }

  removeCartItem(theCartItem: CartItem) {
    // get the item index in the array
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id == theCartItem.id);
    // if found, remove the item from the aray at the given index
    if(itemIndex > -1){
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }


  }
  addProductToCartItem(){

  }

removeAllCall()
{ for( let theCartItem of this.cartItems){
  const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id == theCartItem.id);
  // if found, remove the item from the aray at the given index
  if(itemIndex > -1){
    this.cartItems.splice(itemIndex, 10000000);
    this.computeCartTotals();
  }}
}


addToCart(theCartItem: CartItem){
    // check if we already have the item in our cart.
    let alreadyExistInCart: boolean = false;
    let existingCartItem:any ;

    if(this.cartItems.length > 0){
          //find the item in the cart based on item id
          existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
          // check if we found it
          alreadyExistInCart = (existingCartItem != undefined);
    }

    if(alreadyExistInCart){
      // increment the quantity
      existingCartItem.quantity++;
    }else{
      // just add the item in the array
      this.cartItems.push(theCartItem);

    }

    // compute the totals
    this.computeCartTotals();


  }
  computeCartTotals() {
    let totalPriceValue: number =0;
    let totalQuantityValue: number =0;
    let withLivraison : number = 0;
    const fraisLiv : number = 7;
    for(let tempCartItem of this.cartItems){
      totalPriceValue += tempCartItem.quantity * tempCartItem.price;
      totalQuantityValue += tempCartItem.quantity;
      withLivraison += totalPriceValue+fraisLiv;

    }

    // publish the new values....all subscribers will recieve the new data
    this.totalPrice.next(totalPriceValue);
    this.withLivraison.next(withLivraison);

    this.totalQuantity.next(totalQuantityValue);
    this.totalQuantityValue.next(totalQuantityValue);
    // log the cart data just for debugging purpose
    this.logCartData( totalPriceValue , totalQuantityValue, withLivraison);
  }


  }

