import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NextDirective } from './Directive/next.directive';
import { PrevDirective } from './Directive/prev.directive';
import { CategorieServiceService } from './categorie-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopcatComponent } from './topcat/topcat.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { FilterPipe } from './filter/filter.pipe';
import { PubComponent } from './pub/pub.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartserviceService } from './cartservice.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HistoriqueCComponent } from './historique-c/historique-c.component';
import { PanierComponent } from './panier/panier.component';
import { FaveProductComponent } from './fave-product/fave-product.component';
import { AuthentificationService } from './service/authentification.service';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './service/user.service';
import { AccesSuccessComponent } from './acces-success/acces-success.component';
import { RecetteComponent } from './recette/recette.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';
import { WaitRegistrationComponent } from './wait-registration/wait-registration.component';
import { HomeComponent } from './home/home.component';
import { PanierService } from './service/panier.service';
import { ProductComponent } from './product/product.component';

import { Router } from '@angular/router';
import { CheckoutService } from './service/Checkout.service';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { ContacterNousComponent } from './Contact/contacter-nous/contacter-nous.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';
import { SubcategoryService } from './service/Subcategory.service';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProDdeCommandeComponent } from './pro-dde-commande/pro-dde-commande.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    FooterComponent,
    CategorieComponent,
    NextDirective,
    PrevDirective,
    TopcatComponent,
    ProduitListComponent,
    FilterPipe,
    PubComponent,
    RegisterComponent,
    LoginComponent,
    HistoriqueCComponent,
    PanierComponent,
    FaveProductComponent,
    ForbiddenComponent,
    AccesSuccessComponent,
    VerifyRegistrationComponent,
    WaitRegistrationComponent,
    CategorieComponent,
    RecetteComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    CheckoutComponent,
    ContacterNousComponent,
    CategorieDetailsComponent,
    SubCatComponent,
    PaginationComponent,
    ProDdeCommandeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSliderModule,
    NgxPaginationModule,
    MatDialogModule



    ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, UserService, CategorieServiceService, CartserviceService, AuthentificationService, PanierService, CheckoutService, SubcategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
