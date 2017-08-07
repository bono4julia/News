import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingRoutingModule } from './add-routing.module';

import { AddComponent } from './add.component';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingRoutingModule
  ],
  declarations: [
    AddComponent
  ]
})
export class AddModule { }
