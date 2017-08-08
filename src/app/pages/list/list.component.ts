import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from '../../models/news';

import { NewsServices } from '../../services/news.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  news: News[];

  constructor(
    private newsService: NewsServices,
    private navigationService: NavigationService,
    private router: Router) {
  }

  ngOnInit() {
    this.newsService.getAllNews()
      .then((news: News[]) => {
        return this.news = news
      });
  }

  goDetails(news: News): void {
    this.navigationService.goDetails(news);
  }

  onAdd() {
    this.navigationService.goAdd();
  }

}
