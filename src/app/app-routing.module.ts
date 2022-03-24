import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PizzaComponent } from './pizza/pizza.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'pizza', component:PizzaComponent},
  {path:'build-your-pizza', component:BuildPizzaComponent},
  {path:'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
