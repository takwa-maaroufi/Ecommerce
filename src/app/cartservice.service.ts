import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


  // favouriteProducts
  public faveList: any =[];
  public cartItemList : any =[];
  public productList = new BehaviorSubject<any>([]);
  public faves = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  getfaves(){
    return this.faves.asObservable();
  }
  setFaveProduct(product : any){
    this.faveList.push(...product);
    this.faves.next(product);
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrix();
    console.log(this.cartItemList)
  }
  addtoFave(product : any){
    this.faveList.push(product);
    this.faves.next(this.faveList);
    console.log(this.faveList)
  }
  getTotalPrix() : number{
    var grandTotal :number= 0;
    var total ;
    total=this.cartItemList.product.prix *this.cartItemList.product.quantite;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
