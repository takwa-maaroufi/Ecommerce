import { Component, OnInit } from '@angular/core';

import { CartserviceService } from '../cartservice.service';
import { UserService } from '../service/user.service';
import { Produit } from '../models/produit.model';
//import { Product } from '../models/prodcut';

import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/Product.service';
import { CategorieServiceService } from '../categorie-service.service';
import { Category } from '../models/Category.model';
import { SubcategoryService } from '../service/Subcategory.service';
import { Souscategory } from '../models/Souscategory.model';

@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.component.html',
  styleUrls: ['./categorie-details.component.css']
})
export class CategorieDetailsComponent implements OnInit {

  public subCategoryList : any ;

  public productList : any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  products: Produit[] = [];
  previousCategory: number = 1;
  searchMode: boolean = false;
  currentCategory: any;
c!: Category
categoryName:any;
subcategoryName:any;
produit : any
  // pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  constructor(private actRoute :ActivatedRoute,private categoryService: CategorieServiceService,private productService: ProductService,private route: ActivatedRoute,private router:Router,
    private subCategoryService: SubcategoryService,private cartService:PanierService,private userService:UserService, private cartServiceser : CartserviceService ) { }

  filter(souscategorie:string){
    this.filterSouscategorie = this.productList
    .filter((a:any)=>{
      if(a.souscategorie == souscategorie ){
        return a;
      }
    })
  }/*
  addtoFave(item:any){
    this.cartService.addtoFave(item);

  }*/




  addToCart(theProduct: Produit){
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
  ngOnInit(): void {
   /** this.route.paramMap.subscribe(() => {
      this.listProducts();
    });*/
    // this.userService.forUser();
    this.subcategoryName = this.actRoute.snapshot.params['subcategoryName'];
    this.subCategoryService.getSubategorytBySubCatt(this.subcategoryName)
    .subscribe(res=>{
      this.subCategoryList = res;
      this.subCategoryList.forEach((a:any) => {

        this.subCategoryList.map((el: { nomMarque: any; marque: { nomMarque: any; }; }) =>
          {

            el.nomMarque=el.marque?.nomMarque;

          })
      });
      console.log(this.subCategoryList);
    });

  }



onProductDetails(p: Produit) {
  this.router.navigateByUrl("/product/"+p.id);
}
onSubCategoryList(S: Souscategory) {
  this.router.navigateByUrl("/productSubcategory/"+S.subcategoryName);
}
// forUser() {
//   this.userService.forUser().subscribe(
//     (response) => {
//       console.log(response);
//     },
//     (error)=>{
//       console.log(error);
//     }
//   );
// }


}
