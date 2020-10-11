import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoLinhaComponent, GraficoBarraComponent, GraficoSetorComponent } from './exemplos-estaticos/';
import { FormasComponent } from './exemplos-svg/components/formas/formas.component';

const routes: Routes = [
  { path: 'grafico-barra', component: GraficoBarraComponent },
  { path: 'grafico-linha', component: GraficoLinhaComponent },
  { path: 'grafico-setor', component: GraficoSetorComponent },
  { path: 'formas', component: FormasComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
