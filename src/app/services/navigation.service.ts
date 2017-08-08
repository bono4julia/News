import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { News } from '../models/news';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  goDetails(news: News): void {
    this.router.navigate(['/details', news.id]);
  }

  goBack(): void {
    this.location.back();
  }

  goAdd(): void {
    this.router.navigate(['/add']);
  }

}
