import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from '../models/news';

@Injectable()
export class NewsServices {

  private headers = new Headers({'Content-Type': 'application/json'});
  private newsUrl = 'http://localhost:2403/my-news';

  constructor(private http: Http) { }

  getAllNews() {
    return this.http.get(this.newsUrl)
      .toPromise()
      .then((response) => {
        return response.json() as News[]
      })
      .catch(this.handleError)
  }

  getOneNews(id: string) {
    return this.http.get(this.newsUrl + '/' + id)
    .toPromise()
    .then((response) => {
      return response.json() as News
    })
    .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addNews(title: string, description: string): Promise<News> {
    return this.http
    .post(this.newsUrl, JSON.stringify({title, description}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as News)
    .catch()
  }
  
}