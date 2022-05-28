import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeaningsPageRoutingModule } from './meanings-routing.module';

import { MeaningsPage } from './meanings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeaningsPageRoutingModule
  ],
  declarations: [MeaningsPage]
})
export class MeaningsPageModule {}
