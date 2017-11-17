import { AdministratorPage } from './app.po';

describe('administrator App', () => {
  let page: AdministratorPage;

  beforeEach(() => {
    page = new AdministratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
