import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news';

import { NewsServices } from '../../services/news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  news: News[];
  oneNews: News;

  constructor(private newsService: NewsServices) {
   }

  ngOnInit() {
    this.newsService.getAllNews()
    .then((news: News[]) => { 
      return this.news = news
    });
  }

  showDetails(news: News) {
    this.newsService.getOneNews(news.id)
    .then((news: News) => {
      return this.oneNews = news;
    })
  }
}
