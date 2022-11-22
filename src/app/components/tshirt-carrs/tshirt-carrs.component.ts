import { Component, OnInit } from '@angular/core';
import { Tshirt, TshirtsService } from '../../services/tshirts.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-tshirt-carrs',
  templateUrl: './tshirt-carrs.component.html',
  styleUrls: ['./tshirt-carrs.component.css']
})
export class TshirtCarrsComponent implements OnInit {
  tshirts: Tshirt[] = [];
  westTshirts: Tshirt[] = [];
  eastTshirts: Tshirt[] = [];
  retroTshirts: Tshirt[] = [];
  slidesW: any = [[]];
  slidesE: any = [[]];
  slidesR: any = [[]];
  confCaru(arr: any, confCaruSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += confCaruSize) {
      R.push(arr.slice(i, i + confCaruSize));
    }
    return R;
  }

  constructor( private serviceTsh: TshirtsService,
               private serviceCrt: CarritoService) { }

  ngOnInit() {
    this. tshirts = this.serviceTsh.getTshirts();
    this.westTshirts = this.getWest(this.tshirts);
    this.eastTshirts = this.getEast(this.tshirts);
    this.retroTshirts = this.getRetro(this.tshirts);
    console.log(this.westTshirts);
    console.log(this.eastTshirts);
    console.log(this.retroTshirts);

  }

  addToCart(tshirt: Tshirt) {
    if(tshirt.quantity > 0){
      this.serviceCrt.addToCart(tshirt);
      tshirt.stock -= tshirt.quantity;
      tshirt.quantity = 0;
    }
  }

  getWest(tshirts: Tshirt[]) {
    let result: Tshirt[] = [];
    tshirts.forEach(t => {
      if(t.tipo == 'west'){
        result.push(t);
      }
    });
    this.slidesW = this.confCaru(result, 4);
    return result;
  }

  getEast(tshirts: Tshirt[]) {
    let result: Tshirt[] = [];
    tshirts.forEach(t => {
      if(t.tipo == 'east'){
        result.push(t);
      }
    });
    this.slidesE = this.confCaru(result, 4);
    return result;
  }

  getRetro(tshirts: Tshirt[]) {
    let result: Tshirt[] = [];
    tshirts.forEach(t => {
      if(t.tipo == 'retro'){
        result.push(t);
      }
    });
    this.slidesR = this.confCaru(result, 4);
    return result;
  }

  upQuantity(t: Tshirt) {
    if(t.stock > t.quantity){
      t.quantity++;
    }
  }

  downQuantity(t: Tshirt) {
    if(t.quantity > 0){
      t.quantity--;
    }
  }

}
