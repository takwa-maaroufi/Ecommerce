import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { AuthentificationService } from '../service/authentification.service';
import { CartService } from '../service/cart.service';
import { PanierService } from '../service/panier.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm! : string;
  cart_qty = 0;
  cartItems: CartItem[] = [];


  constructor(private router:Router,
    private cartService:PanierService,
    private catService :CartService,
    private auth : AuthentificationService,
    public userService: UserService) {
      this.catService.cartServiceEvent.subscribe(data=>{
        this.cart_qty = this.catService.getQty();
      })
     }

  ngOnInit() {

  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }



public isLoggedIn(){
  return this.auth.isLoggedIn();
}
public logout(){
  this.auth.clear();
  this.router.navigate(['/login']);
}
public login(){
  this.auth.clear();
  this.router.navigate(['/login']);
}
}