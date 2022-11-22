import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.route';
import { TshirtsService } from './services/tshirts.service';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AboutComponent } from './components/about/about.component';
import { CarritoService } from './services/carrito.service';
import { TshirtCarrsComponent } from './components/tshirt-carrs/tshirt-carrs.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarritoComponent,
    AboutComponent,
    TshirtCarrsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [TshirtsService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
