import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayingComponent } from './playing.component';

const routes: Routes = [{ path: '', component: PlayingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayingRoutingModule { }
