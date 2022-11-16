import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPrintingRoutingModule } from './card-printing-routing.module';
import { CardComponent } from './card/card.component';
import { CardLeaderComponent } from './card-leader/card-leader.component';


@NgModule({
  declarations: [
    CardLeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CardPrintingRoutingModule,
  ],
  exports: [
    CardComponent,
    CardLeaderComponent
  ]
})
export class CardPrintingModule { }
