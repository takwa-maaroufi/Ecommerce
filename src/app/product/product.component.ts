import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { Category } from '../models/Category.model';
import { Produit } from '../models/produit.model';
import { ApiService } from '../service/api.service';
import { AuthentificationService } from '../service/authentification.service';
import { CartService } from '../service/cart.service';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/Product.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,private cartSevice:CartService,  private actRoute: ActivatedRoute,private api : ApiService, private caddyService: PanierService, private router: Router,private authService:AuthentificationService, private userService:UserService, private auth : AuthentificationService) { }
  public productList :any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  p!:Produit;
  message!: string;
  prod:any
  productID:any;
  cartItems!: CartItem[];
  quantity=1
produit : any
categoryNames:any

  ngOnInit(): void {
    // this.userService.forUser();
    this. productID = this.actRoute.snapshot.params['id'];
    this.getData(this.productID);
  }

  isShown: boolean = false ;
  toggleShow() {

    this.isShown = ! this.isShown;

    }
  getData(productID: any){
    this.productService.getData(productID).subscribe(product => {
      this.produit = product;
      console.log(this.produit);

    });
  }
  incrementQuantity(){
  this.quantity+=1;

  }
  decrementQuantity(){
    if(this.quantity<1)
{    this.quantity=1
  }
  else
  this.quantity-=1;
}


addCart(cartProductObj:any){
  if (this.isLoggedIn()){
    var cartObj = {
      "productId":cartProductObj.id,
      "qty":this.quantity,
      "price":cartProductObj.price*this.quantity,
      "productName":cartProductObj.name,
      "imageURL":cartProductObj.imageURL
    }
    this.cartSevice.addCart(cartObj);
  } else {
    this.router.navigate(['/login']);
  }
}
public isLoggedIn(){
  return this.auth.isLoggedIn();
}
}

