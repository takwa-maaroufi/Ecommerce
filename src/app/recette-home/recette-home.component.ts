import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../service/recette.service';

@Component({
  selector: 'app-recette-home',
  templateUrl: './recette-home.component.html',
  styleUrls: ['./recette-home.component.css']
})
export class RecetteHomeComponent implements OnInit {
  p: number = 1;
  recettes?: any = [];
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  categoryName?: string;
  word: any;

  constructor(
    private httpClient: HttpClient,
    public recetteService: RecetteService,
  ) {}
  ngOnInit() {
    this.retrieveRecettes();
  }

  retrieveRecettes(): void {
    this.recetteService.getAll().subscribe(
      (data) => {
        this.recettes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
