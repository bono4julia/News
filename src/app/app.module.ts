import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { NewsServices } from './services/news.service';
import { NavigationService } from './services/navigation.service';
import { FilterStoreService } from './services/filter-store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    NewsServices,
    NavigationService,
    FilterStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
