import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesSuccessComponent } from './acces-success/acces-success.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { DealsComponent } from './deals/deals.component';
import { FaveProductComponent } from './fave-product/fave-product.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HistoriqueCComponent } from './historique-c/historique-c.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanierComponent } from './panier/panier.component';
import { ProDdeCommandeComponent } from './pro-dde-commande/pro-dde-commande.component';
import { ProductComponent } from './product/product.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { RecetteDetailsComponent } from './recette-details/recette-details.component';
import { RecetteHomeComponent } from './recette-home/recette-home.component';
import { RegisterComponent } from './register/register.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';
import { WaitRegistrationComponent } from './wait-registration/wait-registration.component';
import { AuthGuard } from './_auth/auth.guard';


const routes : Routes =[
  {path:"acceuil", component:AcceuilComponent, canActivate:[AuthGuard], data:{roles:['USER']} },
  {path:"productCategory/:categoryName", component:ProduitListComponent, canActivate:[AuthGuard], data:{roles:['USER']}},
  {path:"productSubcategory/:subcategoryName", component:SubCatComponent},

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent },
  {path:"historique",component:HistoriqueCComponent, canActivate:[AuthGuard], data:{roles:['USER']}},
  {path:"panier",component:PanierComponent, canActivate:[AuthGuard], data:{roles:['USER']}},
  {path:"faves",component:FaveProductComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"admin", component: HomeComponent, canActivate:[AuthGuard], data:{roles:['ADMIN']} },
  {path:"Access",component:AccesSuccessComponent },
  {path:"Verify",component:VerifyRegistrationComponent, canActivate:[AuthGuard], data:{roles:['USER']} },
  {path:"wait",component:WaitRegistrationComponent, canActivate:[AuthGuard], data:{roles:['USER']} },
  {path:"product/:id",component:ProductComponent, canActivate:[AuthGuard], data:{roles:['USER']}  },
  {path:"deals",component:DealsComponent},
  {path:"recetteDetails/:id",component:RecetteDetailsComponent},
  {path:"recetteHome",component:RecetteHomeComponent},
  {path:"addToWishlist",component:FaveProductComponent},
  { path: 'checkout', component: CheckoutComponent },
  { path: "productCheckoutCart/:orderId", component: ProDdeCommandeComponent,canActivate:[AuthGuard], data:{roles:['USER']} }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//RouterModule.forRoot(routes7)
export class AppRoutingModule { }
