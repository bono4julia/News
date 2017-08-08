import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NewsServices } from '../../services/news.service';
import { NavigationService } from '../../services/navigation.service';

import { News } from '../../models/news';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  oneNews: News;

  constructor(
    private newsService: NewsServices,
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.newsService.getOneNews(id)
      .then((news: News) => {
        return this.oneNews = news;
      })
  }
  
  onGoBack() {
    this.navigationService.goBack();
  }
}
