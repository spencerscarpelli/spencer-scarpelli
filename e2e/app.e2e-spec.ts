import { SpencerScarpelliPage } from './app.po';

describe('spencer-scarpelli App', function() {
  let page: SpencerScarpelliPage;

  beforeEach(() => {
    page = new SpencerScarpelliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
