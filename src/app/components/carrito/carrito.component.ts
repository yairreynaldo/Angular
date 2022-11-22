import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Tshirt } from '../../services/tshirts.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items: Tshirt[] = [];

  constructor(private cartService: CarritoService) { }

  ngOnInit(): void {

    this.cartService.items.subscribe(data => this.items = data);
    
  }

  calcTotal() {
    let sum: number = 0;
    this.items.forEach(i => {
      sum += i.precio*i.quantity;
    });
    return sum;
  }

  deleteItem(item: Tshirt) {
    this.cartService.deleteItem(item);
  }

  emptyCart(){
    this.cartService.emptyCart();
  }

}
