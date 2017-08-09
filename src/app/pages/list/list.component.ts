import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from '../../models/news';
import { NewsFilter } from '../../models/news-filter';

import { NewsServices } from '../../services/news.service';
import { NavigationService } from '../../services/navigation.service';
import { FilterStoreService } from '../../services/filter-store.service';

import { categories } from '../../dictionaries/categories';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  news: News[] = [];
  filter: NewsFilter = null;

  categoriesList = categories;

  constructor(
    private newsService: NewsServices,
    private navigationService: NavigationService,
    private filterStoreService: FilterStoreService,
    private router: Router) {
      
  }

  ngOnInit() {
    this.newsService.getAllNews()
      .then((news: News[]) => {
        this.news = news;
        this.filter = this.filterStoreService.filter;
      });
  }

  goDetails(news: News): void {
    this.navigationService.goDetails(news);
  }

  onAdd() {
    this.navigationService.goAdd();
  }
}
