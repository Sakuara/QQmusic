import { QqmusicPage } from './app.po';

describe('qqmusic App', () => {
  let page: QqmusicPage;

  beforeEach(() => {
    page = new QqmusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
