import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingRoutingModule } from './add-routing.module';

import { AddComponent } from './add.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddComponent
  ]
})
export class AddModule { }
