import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../service/recette.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-recette-details',
  templateUrl: './recette-details.component.html',
  styleUrls: ['./recette-details.component.css']
})
export class RecetteDetailsComponent implements OnInit {

  constructor(private router:Router, private recetteService:RecetteService, private actRoute: ActivatedRoute) { }
  public productList :any ;
  public filterSouscategorie : any;
  searchKey:string ="";
  r!:Recette;
  message!: string;
  prod:any
  recetteID:any;
  quantity=1
  recette: any;
  products: any;
  recettes: any;

  ngOnInit(): void {
    this.recetteID = this.actRoute.snapshot.params['id'];
    this.getData(this.recetteID);
  }

  getData(recetteID: any){
    this.recetteService.getData(recetteID).subscribe(recette => {
      this.recette = recette;
      this.products = this.recette.products;
    });
    this.recetteService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.recettes = data.filter(el => el.id != recetteID).slice(0, 3);
        console.log(this.recettes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
