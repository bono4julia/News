import { Pipe, PipeTransform } from '@angular/core';

import { News } from '../models/news';

@Pipe({
  name: 'filterCategory'
})
export class ListPipe implements PipeTransform {

  transform(value: News[], selectedCategory: string): any {
 
    if(value == null) {
      return [];
    }

    if(selectedCategory === 'all') {
      return value;
    }

    return value.filter((item) => {
      return item.category == selectedCategory
    });
  }

}
