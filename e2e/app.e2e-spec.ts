import { NewsTwoPage } from './app.po';

describe('news-two App', () => {
  let page: NewsTwoPage;

  beforeEach(() => {
    page = new NewsTwoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
