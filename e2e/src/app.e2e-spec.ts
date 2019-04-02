import { AppPage } from './app.po';
import { NoteDetailPage } from './note-detail.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display list of notes with two items', () => {
    expect(page.getListGroupItems().count()).toBe(2);
  });

  it('should display note detail after list item click', () => {
    page.getListGroupItems().get(0).click().then(() => {
      // browser.driver.sleep(1000);
      // browser.waitForAngular();
      let noteDetailPage = new NoteDetailPage();
      expect(noteDetailPage.getTitle().getText()).toBe('Note detail');
      expect(noteDetailPage.getEditButton).toBeDefined();
    });
  });
});
