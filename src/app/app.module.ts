import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CompraComponent } from './component/compra/compra.component';

import { appRouter } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
