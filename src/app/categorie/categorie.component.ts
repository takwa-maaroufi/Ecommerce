import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../categorie-service.service';
import { Category } from '../models/Category.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  public categories: any;
  constructor(private router:Router, private categorieService: CategorieServiceService, private userService : UserService) { }
categoryList:any
  ngOnInit() :void{
    /** this.route.paramMap.subscribe(() => {
       this.listProducts();
     });*/
     this.userService.forUser();
this.getData();
    this.categorieService.getAll()
    .subscribe(res=>{
      this.categoryList = res;
      console.log(this.categoryList);

  }
  );

}
onCategoryDetails(C: Category) {
  this.router.navigateByUrl("/productCategory/"+C.categoryName);
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

getData() {
  this.categorieService.getAll().subscribe(
    response => { this.categorieService.list = response;
  }
  );

}
}
