import { by, element } from 'protractor';

export class NoteDetailPage {

  getTitle() {
    return element(by.css('.note-detail'));
  }

  getEditButton() {
    return element(by.css('.note-edit'));
  }
}
