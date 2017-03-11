import { BookRecipePage } from './app.po';

describe('book-recipe App', () => {
  let page: BookRecipePage;

  beforeEach(() => {
    page = new BookRecipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
