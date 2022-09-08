import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  file: any;
 // currentCategorie: Categorie = {};
//  num : any;
    email?:any;
    password?: any;
    firstName?: any;
    lastName?: any;
    ville?: any;
    situationFamilliale?: any;
    adress?: any;
    gouvernorat?: any;
    tel?: any;
    date?: any;
    profession?: any;
    image? : File;
    object: any;
  registerForm!: FormGroup;
  submitted = false;
   acceptTerms?:any

  constructor(
    private userService:UserService,
    private router: Router, private fb: FormBuilder,
    ) {


     }
    ngOnInit() {

      this.registerForm =  new FormGroup({
        image:new FormControl ('', [Validators.required]),
        email: new FormControl ('', [Validators.required,Validators.email]),
        password: new FormControl ('', [Validators.required,Validators.minLength(6)]),
        firstName: new FormControl ('', [Validators.required]),
        lastName: new FormControl ('', [Validators.required]),
        profession: new FormControl ('', [Validators.required]),
        ville: new FormControl ('', [Validators.required]),
        gouvernorat: new FormControl ('', [Validators.required]),
        adress: new FormControl ('', [Validators.required]),
        tel: new FormControl ('', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]),
        situationFamilliale: new FormControl ('', [Validators.required]),
        date: new FormControl ('', [Validators.required]),


      });
    }
    get f(){
      return this.registerForm.controls;
    }

situation: any;
gouver:any;
DateSelected:any;
 SelectedValue :any;
  Professions =[{"id":"0", name:"Profession *"},{"id":"1",name:"Agriculteurs /Artisans"},{"id":"2",name:"Commerçant"},{"id":"3",name:"Chef d entreprise"},{"id":"4",name:"Profession libérale"},{"id":"5",name:"Cadre supérieur"},{"id":"6",name: "Cadre moyen"},{"id":"7",name:"Enseignant, Professeur, professions scientifiques"},{"id":"8",name:"Ingénieurs / Cadre technique d entreprise"},{"id":"9",name:"Technicien /Agent de maîtrise"},{"id":"10",name:"Policier / militaire"},{"id":"11",name:"Fonction publique"},{"id":"12",name:"Employés administratifs d entreprise"},{"id":"13",name:"Ouvriers / Chauffeur"},{"id":"14",name:"Femme au foyer"},{"id":"15",name:"Elèves, étudiants"},{"id":"16",name:"Sans emploi"},{"id":"17",name:"Autres"}]
  Gouvernorat =[{"id":"0", name:"Gouvernorat *"},{"id":"1",name:"Ariana"},{"id":"2",name:"Béja"},{"id":"3",name:"Ben Arous"},{"id":"4",name:"Bizerte"},{"id":"5",name:"Gabes"},{"id":"6",name:"Gafsa"},{"id":"7",name:"Jendouba"},{"id":"8",name:"kairouan"},{"id":"9",name:"kasserine"},{"id":"10",name:"kébili"},{"id":"11",name:"Le kef"},{"id":"12",name:"Mahdia"},{"id":"13",name:"La Manouba"},{"id":"14",name:"Médenine"},{"id":"15",name:"Monasrir"},{"id":"16","name":"Nabeul"},{"id":"17",name:"Sfax"},{"id":"18",name:"Sidi Bouzid"},{"id":"19",name:"Siliana"},{"id":"20",name:"Sousse"},{"id":"21",name:"Tataouine"},{"id":"22",name:"Tozeur"},{"id":"23",name:"Zaghouan"}]
  SituationFamilliale=[{"id":"0", name:"Situation Familliale *"}, {"id":"1",name: "Célibataire"}, {"id":"2",name:"Marié(e)"},{"id":"3",name:"Divorcé(e)"},{"id":"4",name:" Veuf(e)"}];
 img(file : any){
    console.log(file);
    console.log(file.files[0]);
    this.file = file.files[0];
  }

  getVal() {
    console.log(this.SelectedValue.name);
    console.log(this.gouver.name);
     console.log(this.situation.name);  // returns selected option's name
}
onSubmit() {


  var formData = new FormData();
  formData.append('email', this.email)
  formData.append('password', this.password)
  formData.append('firstName', this.firstName)
  formData.append('lastName', this.lastName)
  formData.append('profession', this.profession)
  formData.append('ville', this.ville)
  formData.append('gouvernorat', this.gouvernorat)
  formData.append('adress', this.adress)
  formData.append('tel', this.tel)
  formData.append('situationFamilliale', this.situationFamilliale)
  formData.append('date', this.date)

  this.userService.register(
    //this.object,
    this.file,
    this.email,
    this.password,
    this.firstName,
    this.lastName,
    this.profession,
    this.ville,
    this.gouvernorat,
    this.adress,
    this.tel,
    this.situationFamilliale,
    this.date
    //this.crudApi.formData?.value
    ).subscribe((response) => {
      console.log(this.registerForm.value);


      this.router.navigate(['/wait']);
  },
  (error) => {
    console.log(error);
  });


}
/*register(registerForm:NgForm) {
    this.userService.register(registerForm.value).subscribe(
      (response: any) => {

          this.router.navigate(['/wait']);
      },
      (error) => {
        console.log(error);
      }
    );*/
  }/*
   onSubmit() {
     this.object = {
       image: this.file,
       description: this.description,
       categoryName: this.categoryName,

     }
    var formData = new FormData();
    formData.append('email', this.email)
    formData.append('password', this.password)
    formData.append('firstName', this.firstName)
    formData.append('lastName', this.lastName)
    formData.append('profession', this.profession)
    formData.append('ville', this.ville)
    formData.append('gouvernorat', this.gouvernorat)
    formData.append('adress', this.adress)
    formData.append('tel', this.tel)
    formData.append('situationFamilliale', this.situationFamilliale)
    formData.append('date', this.date)


    this.userService.register(
      //this.object,
                    this.file,
                    this.email,
                    this.password,
                    this.firstName,
                    this.lastName,
                    this.profession,
                    this.ville,
                    this.gouvernorat,
                    this.adress,
                    this.tel,
                    this.situationFamilliale,
                    this.date,

      //this.crudApi.formData?.value
      ).
    subscribe((_data: any) => {
      // this.crudApi.get
      this.router.navigate(['/wait']);
    });
  }*/



