import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormasComponent } from './exemplos-svg/components/formas/formas.component';
import { GraficoBarraComponent, GraficoLinhaComponent, GraficoSetorComponent } from './exemplos-estaticos/index';

import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormasComponent,
    TestComponent,
    GraficoLinhaComponent,
    GraficoBarraComponent,
    GraficoSetorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
