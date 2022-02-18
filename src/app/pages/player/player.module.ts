import { LeftPanelComponent } from './../../components/left-panel/left-panel.component';
import { PlayerRoutes } from './player.routes';
import { RouterModule } from '@angular/router';
import { PlayerComponent } from './player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ]
})
export class PlayerModule { }
