import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuildPizzaComponent,
    HomePageComponent,
    CartComponent,
    PizzaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
