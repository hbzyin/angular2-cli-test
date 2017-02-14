import { TestYomobPage } from './app.po';

describe('test-yomob App', function() {
  let page: TestYomobPage;

  beforeEach(() => {
    page = new TestYomobPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
