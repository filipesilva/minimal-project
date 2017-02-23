import { MinimalProjectPage } from './app.po';

describe('minimal-project App', () => {
  let page: MinimalProjectPage;

  beforeEach(() => {
    page = new MinimalProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
