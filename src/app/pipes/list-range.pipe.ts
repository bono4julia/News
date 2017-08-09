import { Pipe, PipeTransform } from '@angular/core';

import { News } from '../models/news';

@Pipe({ name: 'range' })
export class RangePipe implements PipeTransform {
  transform(allNews: News[], page) {
    const start = (page - 1) * 10;

    return allNews.slice(start, start + 10)
  }
}