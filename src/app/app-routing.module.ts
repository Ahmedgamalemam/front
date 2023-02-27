import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { FavouritComponent } from './component/favourit/favourit.component';
import { HomeComponent } from './component/home/home.component';
import { OredrsComponent } from './component/oredrs/oredrs.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'favourit',component:FavouritComponent},
{path:'cart',component:CartComponent},
{path:'orders',component:OredrsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
