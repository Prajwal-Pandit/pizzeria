import { Component, OnInit } from '@angular/core';
import { PizzaFetchService } from '../pizza-fetch.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  pizza: any = [];
  vImg: string = "./assets/img/veg.png";
  nvImg : string = "./assets/img/non-veg.png";
  price: number = 0;
  price1: number = 0;
  i:number = 0;
  ingredients: any = [];
  ordered: boolean = false;
  

  constructor(private pizzaItem: PizzaFetchService) { 
    pizzaItem.getCartItem().subscribe((data)=>{
      this.pizza = data;
      this.total(this.pizza,this.ingredients);
    });
    this.ingredients = pizzaItem.getIngredientsTotal();
    
  }

  public delete(id:number){
    this.pizzaItem.deleteCart(id).subscribe((data:any)=>{
      if(data.deletedCount == 1){
        this.pizza.splice(
          this.pizza.findIndex((cid: number) => cid == id),
          1
        );
      }
      // this.pizzaItem.removeCartItem(id); 
      this.pizzaItem.getCartItem().subscribe((data)=>{
        this.pizza = data;
        this.price = 0;
        this.price1 = 0;
        this.total(this.pizza,this.ingredients);
      }); 
    });
  }
  
  total(pizz:any,ing:any){
    for (let p of pizz) {
      this.price1 = this.price1 + p.price;
    }
    for(let i of ing){
      this.price = this.price + i.price;
    }
    this.price += this.price1;
  }

  remove(){
    this.pizzaItem.removeAll().subscribe((data)=>{
      this.pizza = data;
      this.ordered = true;
    });
  }


  ngOnInit(): void {
  }
}
