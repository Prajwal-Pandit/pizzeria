import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PizzaFetchService {

  list: any = [];
  public cartItem = new BehaviorSubject<any>([]);
  iTotal: any = [];
  qty: number = 1;
  url: string = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { 
  }
  public getPizza(){
      return this.http.get(this.url+'pizza');
  }

  public getIngredients(){
    return this.http.get(this.url+'ingredients');
  }

  public postToCart(cartItem:any){
    return this.http.post(this.url+'cart/add',cartItem);
  }

  // public addCartItem(item: any){
  //   this.list.push(item); 
  //   this.cartItem.next(this.list);
  // }

  public getCartItem(){
    return this.http.get(this.url+'cart');
  }

  public deleteCart(cid:number){
    let id:any = cid;
    return this.http.post(this.url+'cart/delete',id);
  }

  // public removeCartItem(id:number){
  //   this.list.splice(
  //     this.list.findIndex((cid: number) => cid == id),
  //     1
  //   );
  //   this.cartItem.next(this.list);    
  // }

  public ingredientsTotal(i:any){
    this.iTotal = i;
  }

  public getIngredientsTotal(){
    return this.iTotal;
  }

  public removeAll(){
    return this.http.delete(this.url+'cart/remove');
  }
}
