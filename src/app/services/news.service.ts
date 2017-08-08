import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { News } from '../models/news';

@Injectable()
export class NewsServices {

  constructor(private http: Http) { }

  getAllNews() {
    return this.http.get('http://localhost:2403/my-news')
      .toPromise()
      .then((response) => {
        return response.json() as News[]
      })
      .catch(this.handleError)
  }

  getOneNews(id: string) {
    return this.http.get('http://localhost:2403/my-news/'+id)
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
  
}