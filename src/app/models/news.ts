import { Category } from '../category.enum';

export class News {
  constructor(
    public id: string = null,
    public title: string = null,
    public description: string = null,
    public category: Category = null
  ) { }
}
