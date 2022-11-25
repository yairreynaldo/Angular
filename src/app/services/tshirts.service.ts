import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TshirtsService {

   tshirts: Tshirt[] = [
        {
          nombre: "Grizzlies Away",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/mephis.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Jazz Icon Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/jazzIcon.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Lakers City Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/lakersCity.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Spurs Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/spursAway.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Celtics Away",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/celticsAway.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Pacers Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/pacersHome.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "76ers 97/98",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/76ersRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "SuperSonics 95/96",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/sonics.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Hawks 96/97",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/hawksRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Rockets 96/97",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/rocketsRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Lakers Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/lakerHome.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Suns City Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/sunsCity.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Bulls Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/bullsHome.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Heat City Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/heatCity.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "TimberWolves Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/wolves.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Warriors City Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/warriorsBlack.png",
          precio: 500,
          tipo: "west",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Nets Away",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/netsAway.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Raptors Icon Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/raptorsIcon.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Knicks Home",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/knicksHome.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Nets City Edition",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/netsCity.png",
          precio: 500,
          tipo: "east",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Bulls Jordan 95/96",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/jordanRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Raptors 98/99",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/raptorsRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Magics 94/95",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/magicRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        },
        {
          nombre: "Lakers Kobe 07/08",
          img: "https://raw.githubusercontent.com/yairreynaldo/Angular/main/src/assets/img/kobeRetro.png",
          precio: 500,
          tipo: "retro",
          hayStock: true,
          stock: 5,
          quantity: 0
        }
  ];

  constructor() { }

  getTshirts(){
    return this.tshirts;
  }
  getWest() {
    let result: Tshirt[] = [];
    for(let elem of this.tshirts){
      if(elem.tipo == 'west'){
        result.push(elem);
      }
    }
    return result;
  }


}

export interface Tshirt{
  nombre: string,
  img: string,
  precio: number,
  tipo: string
  hayStock: boolean,
  stock: number,
  quantity: number
}
