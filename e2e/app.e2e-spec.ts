import { MmckennnaPage } from './app.po';

describe('mmckennna App', function() {
  let page: MmckennnaPage;

  beforeEach(() => {
    page = new MmckennnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
