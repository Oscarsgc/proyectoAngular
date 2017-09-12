import { NuevoProyectoAngularPage } from './app.po';

describe('nuevo-proyecto-angular App', () => {
  let page: NuevoProyectoAngularPage;

  beforeEach(() => {
    page = new NuevoProyectoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
