import { Injectable } from '@angular/core';

import { NewsFilter } from '../models/news-filter';

@Injectable()
export class FilterStoreService {

  filter: NewsFilter = {
    title: '',
    category: 'all',
    page: null
  };

  constructor() { }

}
