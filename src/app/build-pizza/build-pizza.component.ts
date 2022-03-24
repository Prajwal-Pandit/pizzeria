import { Component, OnInit, ViewChild } from '@angular/core';
import { PizzaFetchService } from '../pizza-fetch.service';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css'],
})
export class BuildPizzaComponent implements OnInit {
  ingredients: any = [];
  price: number = 0;
  isChecked: boolean = false;
  cartIngredients: any = [];

  constructor(pIngredients: PizzaFetchService) {
    pIngredients.getIngredients().subscribe((data) => {
      this.ingredients = data;
    });
    pIngredients.ingredientsTotal(this.cartIngredients);
  }

  
  Adding = (p:number) =>{
    this.price = this.price+p;
  }

  Deducting = (p:number) => {
      this.price = this.price-p;
  }

  toggle(event: any){
    if (event.target.checked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  total(i:any){
    if(this.isChecked){
      this.cartIngredients.push(i);
      this.Adding(i.price);
    }else{
      this.cartIngredients.push(i);
      this.Deducting(i.price);
    }
  }

  ngOnInit(): void {
  }
}
