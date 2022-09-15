import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiService } from '../service/api.service';
import { CartserviceService } from '../cartservice.service';
import { UserService } from '../service/user.service';
import { Produit } from '../models/produit.model';

//Slider Require Animation


//Main Slider Component



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
import { Options } from '@angular-slider/ngx-slider';
import { FavorisService } from '../service/favoris.service';
import { CartService } from '../service/cart.service';



@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})

export class ProduitListComponent implements OnInit {
  public subCategoryList : any ;

  public List : any ;
  public marqueList : any ;
  public arrays : any ;
  image:any
  public productList : any ;
  public filterSouscategorie : any;
  public searchFiltereddata:any
  searchKey:string ="";
  products: Produit[] = [];
  previousCategory: number = 1;
  searchMode: boolean = false;
  currentCategory: any;
  date:any

wishlist:any
c!: Category
categoryName:any;
subcategoryName:any;
produit : any
nomMarque:any
public filterSubCat :any
public Filterdata: any = {};
priceMinValue!: number;
priceHighValue!: number;
p: number = 1;
id:any
  // pagination

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  constructor( private cartSevice:CartService, private marqueService:MarqueService,private favorisService: FavorisService, private actRoute :ActivatedRoute,private categoryService: CategorieServiceService,private productService: ProductService,private route: ActivatedRoute,private router:Router,
    private subCategoryService: SubcategoryService,private cartService:PanierService,private userService:UserService, private cartServiceser : CartserviceService ) { }





    isShown: boolean = false ;
toggleShow() {

  this.isShown = ! this.isShown;

  }

  searchFilter() {
    /* this.searchList = this.searchText; */
    if (this.nomMarque !== '') {
      this.marqueList = this.marqueList.filter((res: { nomMarque: string; }) => {
        return res.nomMarque.toLowerCase().match(this.nomMarque.toLowerCase());
      });
    } else if (this.nomMarque === '') {
      this.ngOnInit();
    }
  }


  ngOnInit(): void {
   /** this.route.paramMap.subscribe(() => {
      this.listProducts();
    });*/

    // this.userService.forUser();
    this.marqueService.getAll()
    .subscribe(res=>{
      this.marqueList = res;
      this.marqueList.forEach((a:any) => {


     }) });
     this.subcategoryName = this.actRoute.snapshot.params['subcategoryName'];
     this.categoryName = this.actRoute.snapshot.params['categoryName'];
    this.subCategoryService.getSubategorytByCat(this.categoryName)
    .subscribe(res=>{
      this.subCategoryList = res;
      this.subCategoryList.forEach((a:any) => {

        this.subCategoryList.map((el: { nomMarque: any; marque: { nomMarque: any; } }) =>
        {

          el.nomMarque=el.marque?.nomMarque;


    });
          })
      });

    this.productService.getProductByCat(this.categoryName)
    .subscribe(res=>{

      this.productList = res;
      this.arrays=res;
      this.filterSubCat=res;
      this.productList.forEach((a:any) => {

    const priceList = this.filterSubCat.map((product: { price: any; }) => product.price);
    this.priceMinValue = Math.min.apply(null, priceList);
    this.priceHighValue = Math.max.apply(null, priceList);

        this.productList.map((el: { nomMarque: any; marque: { nomMarque: any; } }) =>
          {

            el.nomMarque=el.marque?.nomMarque;

          })
      });
      console.log(this.arrays)

    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.userService.forUser();
    this.subcategoryName = this.actRoute.snapshot.params['subcategoryName'];

    this.productService.getProductBySubcat(this.subcategoryName)
    .subscribe(res=>{
      this.List = res;
      this.List.forEach((a:any) => {

        this.List.map((el: { nomMarque: any; marque: { nomMarque: any; }; }) =>
          {

            el.nomMarque=el.marque?.nomMarque;

          })
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;

})



  }

onProductDetails(p: Produit) {
  this.router.navigateByUrl("/product/"+p.id);
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
filter(subcategorynom:string){
  this.filterSubCat=this.productList
  .filter((a:any)=>{
    if(a.subCategory.subcategoryName== subcategorynom || a.subCategory.subcategoryName==''){
      return a;
    }
  })
  console.log(this.productList);

}
tempArray:any=[];
newArray:any=[];



onChange(event:any){
  if(event.target.checked){
  this.tempArray=this.arrays.filter((e:any)=>e.marque.marqueId == event.target.value);
  //console.log(this.tempArray)
  this.filterSubCat=[];
  this.newArray.push(this.tempArray);
  //console.log(this.productList)

  for(let i=0; i<this.newArray.length;i++){
    var firstArray = this.newArray[i];
    console.log(firstArray)
    for(let i=0; i<firstArray.length;i++){
      var obj=firstArray[i];
     this.filterSubCat.push(obj);
    //  console.log(     this.productList.push(obj) )

    }

  }

    }
  else{
    this.tempArray=this.filterSubCat.filter((e:any)=>e.marque.marqueId != event.target.value);
    this.newArray=[];
    this.filterSubCat=this.productList
    this.newArray.push(this.tempArray);
    console.log(this.newArray)

}


}

minValue:number=0
maxValue=8
options: Options = {
  floor:1,
  ceil:200
};
filterProducts(): any {
  this.filterSubCat
    = this.productList.filter((x: { price: number; }) => x.price >= this.minValue && this.maxValue >= x.price);
}


//add

addCart(cartProductObj:any){
  var cartObj = {
    "productId":cartProductObj.id,
    "qty":"1",
    "price":cartProductObj.price,
    "productName":cartProductObj.name,
    "imageURL":cartProductObj.imageURL
  }
  this.cartSevice.addCart(cartObj);
  console.log(cartObj);

}
addtofave(cartProductObj:any){
  var cartObj = {
    "productId":cartProductObj.id,
    "qty":"1",
    "price":cartProductObj.price,
    "productName":cartProductObj.name,
    "imageURL":cartProductObj.imageURL
  }
  this.favorisService.addCartTofavoris(cartObj);
  console.log(cartObj);

}
}
