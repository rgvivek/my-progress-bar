import { ProgressBarAppPage } from './app.po';

describe('progress-bar-app App', function() {
  let page: ProgressBarAppPage;

  beforeEach(() => {
    page = new ProgressBarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
