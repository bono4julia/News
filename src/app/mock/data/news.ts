import { News } from '../../models/news';
import { Category } from '../../category.enum';

export class NewsMockDataService {
  createDb() {
    const news = [
      new News(1, 'New job', 'Today the first day of new job', Category.life),
      new News(2, 'Favorite food', 'Today is Potatos', Category.food),
      new News(3, 'Life with love', 'Every day we wake up with love', Category.life),
      new News(4, 'Forest', 'Forest park near our house', Category.life),
      new News(5, 'Sushia', 'Today we was in Sushia', Category.food),
      new News(6, 'Dog do not look like cat', 'Every dog is very good', Category.life),   
      new News(7, 'Hello word', 'Word you look good', Category.health),
      new News(8, 'Spring', 'Spring with love', Category.life),
      new News(9, 'Russia', 'From Russia with love', Category.life),
      new News(10, 'MC burger', 'New MC burger king', Category.food),
      new News(11, 'American life', 'Do I have to change my name', Category.life),   
      new News(12, 'Madonna is ill', 'The singer lost her voice', Category.health)      
    ];
    return { news }
  }
}
