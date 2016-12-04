import { browser, element, by } from 'protractor';

export class SpencerScarpelliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
