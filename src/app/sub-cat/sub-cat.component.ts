import { Component, OnInit } from '@angular/core';

import { ApiService } from '../service/api.service';
import { CartserviceService } from '../cartservice.service';
import { UserService } from '../service/user.service';
import { Produit } from '../models/produit.model';

import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../models/cart-item';
import { PanierComponent } from '../panier/panier.component';
import { PanierService } from '../service/panier.service';
import { ProductService } from '../service/Product.service';
import { CategorieServiceService } from '../categorie-service.service';
import { Category } from '../models/Category.model';
import { SubcategoryService } from '../service/Subcategory.service';
import { Souscategory } from '../models/Souscategory.model';
import { MarqueService } from '../service/marque.service';
import { Marque } from '../models/marque.model';
@Component({
  selector: 'app-sub-cat',
  templateUrl: './sub-cat.component.html',
  styleUrls: ['./sub-cat.component.css']
})
export class SubCatComponent implements OnInit {
  public subCategoryList : any ;
  public List : any ;

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
public marquelist : any ;
nomMarque:any
  constructor(private marqueService :MarqueService, private actRoute :ActivatedRoute,private categoryService: CategorieServiceService,private productService: ProductService,private route: ActivatedRoute,private router:Router,
    private subCategoryService: SubcategoryService,private cartService:PanierService,private userService:UserService, private cartServiceser : CartserviceService ) { }
    addToCart(theProduct: Produit){
      const theCartItem = new CartItem(theProduct);
      this.cartService.addToCart(theCartItem);
    }
    ngOnInit(): void {
    /** this.route.paramMap.subscribe(() => {
       this.listProducts();
     });*/

     this.userService.forUser();
     this.marqueService.getAll()
     .subscribe(res=>{
      this.marquelist = res;
      this.marquelist.forEach((a:any) => {


      console.log(this.marquelist);
     }) });


     this.subcategoryName = this.actRoute.snapshot.params['subcategoryName'];
     this.subCategoryService.getSubategorytBySubCatt(this.subcategoryName)
     .subscribe(res=>{
       this.List = res;
       this.List.forEach((a:any) => {
        console.log(this.List);


       });
     });
     this.subcategoryName = this.actRoute.snapshot.params['subcategoryName'];

     this.productService.getProductBySubcat(this.subcategoryName)
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

     this.cartService.search.subscribe((val:any)=>{
       this.searchKey = val;
     })

   }
   searchFilter() {
    /* this.searchList = this.searchText; */
    if (this.nomMarque !== '') {
      this.marquelist = this.marquelist.filter((res: { nomMarque: string; }) => {
        return res.nomMarque.toLowerCase().match(this.nomMarque.toLowerCase());
      });
    } else if (this.nomMarque === '') {
      this.ngOnInit();
    }
  }

 onProductDetails(p: Produit) {
   this.router.navigateByUrl("/product/"+p.id);
 }
 onSubCategoryList(S: Souscategory) {
   this.router.navigateByUrl("/productSubcategory/"+S.subcategoryName);




 }

 isShown: boolean = false ;
 toggleShow() {

   this.isShown = ! this.isShown;

   }




 forUser() {
   this.userService.forUser().subscribe(
     (response) => {
       console.log(response);
     },
     (error)=>{
       console.log(error);
     }
   );
 }

}
