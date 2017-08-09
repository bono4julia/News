import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListPipe } from '../../pipes/list.pipe';
import { RangePipe } from '../../pipes/list-range.pipe';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    NgbPaginationModule.forRoot()
  ],
  declarations: [
    ListComponent,
    ListPipe,
    RangePipe
]
})
export class ListModule { }
