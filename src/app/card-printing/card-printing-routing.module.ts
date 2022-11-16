import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLeaderComponent } from './card-leader/card-leader.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'leader', component: CardLeaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardPrintingRoutingModule { }
