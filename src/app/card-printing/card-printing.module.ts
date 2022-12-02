import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardPrintingRoutingModule } from './card-printing-routing.module';
import { CardComponent } from './card/card.component';
import { CardLeaderComponent } from './card-leader/card-leader.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    CardLeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CardPrintingRoutingModule,
    QRCodeModule
  ],
  exports: [
    CardComponent,
    CardLeaderComponent
  ]
})
export class CardPrintingModule { }
