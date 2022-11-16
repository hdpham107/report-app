import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CardPrintingModule } from './card-printing/card-printing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./card-printing/card-printing.module').then((m) => m.CardPrintingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
