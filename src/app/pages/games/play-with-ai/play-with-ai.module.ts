import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayWithAIPageRoutingModule } from './play-with-ai-routing.module';

import { PlayWithAIPage } from './play-with-ai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayWithAIPageRoutingModule
  ],
  declarations: [PlayWithAIPage]
})
export class PlayWithAIPageModule {}
