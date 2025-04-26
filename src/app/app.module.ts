import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { ShopComponent } from './features/shop/shop.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { CartComponent } from './features/cart/cart.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FloatingComponent } from './layouts/floating/floating.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { HotSaleComponent } from './shared/components/hot-sale/hot-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShopComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    FloatingComponent,
    BannerComponent,
    HotSaleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
