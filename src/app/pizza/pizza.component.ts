import { Component, OnInit } from '@angular/core';
import { PizzaFetchService } from '../pizza-fetch.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  pizza: any = [];
  
  vImg: string = "./assets/img/veg.png";
  nvImg : string = "./assets/img/non-veg.png";
  cartData: any = [];
  item: any = [];

  constructor(private pizzaItem: PizzaFetchService) {
    this.pizzaItem.getPizza().subscribe((data)=>{
      this.pizza = data;
    },(err)=>{
      console.log(err);
    });
  }

  public getCartData(pizzaData: any){
    
    this.item = {
      id: pizzaData.id,
      name: pizzaData.name,
      quantity: 1,
      price: parseInt(pizzaData.price),
      image: pizzaData.image,
      type:pizzaData.type
    };

    this.cartData = this.item;
    
    this.pizzaItem.postToCart(this.cartData).subscribe((data:any)=>{});
  }   

  ngOnInit(): void {  
  }
}
