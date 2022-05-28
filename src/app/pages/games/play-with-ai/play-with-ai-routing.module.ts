import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayWithAIPage } from './play-with-ai.page';

const routes: Routes = [
  {
    path: '',
    component: PlayWithAIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayWithAIPageRoutingModule {}
