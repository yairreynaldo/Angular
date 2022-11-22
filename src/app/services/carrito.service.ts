import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tshirt } from './tshirts.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _items: Tshirt[] = [];
  items: BehaviorSubject<Tshirt[]> = new BehaviorSubject(this._items);

  constructor() { 
    console.log(this._items);
  }

  addToCart(t: Tshirt) {
    let item = this._items.find((v1) => v1.nombre == t.nombre);
    if(!item){
      this._items.push({ ...t });
    }else {
      item.quantity += t.quantity;
    }
    console.log(this._items);
    this.items.next(this._items);

    /* let alreadyInCart:boolean = false;
    let item: Tshirt = t;
    this._items.forEach((ts: Tshirt) => {
      if (ts.nombre == item.nombre) {
        alreadyInCart = true;
        ts.quantity += item.quantity
      }
    });
    if(!alreadyInCart) {
      this._items.push(item);
      t.stock - t.quantity;
      console.log(item.quantity);
    }
    this._itemsSubject.next(this._items); */

  }

  deleteItem(item: Tshirt) {
    for (let index = 0; index < this._items.length; index++) {
      if(item.nombre == this._items[index].nombre) {
        this._items.splice(index, 1);
      }
    }
  }

  emptyCart(){
    this._items.splice(0, this._items.length);
  }
}
