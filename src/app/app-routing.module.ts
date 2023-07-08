import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { FoodPageComponent } from './food-page/food-page.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'prefix'},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tagCategory',component:HomeComponent},
  {path:'foodPage/:id',component:FoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
