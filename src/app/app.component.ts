import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <div class="row languages">
        <small>
          <a *ngIf="language !== 'en'" (click)="language = 'en'">English</a>
          <strong *ngIf="language === 'en'">English</strong>
        </small>
        <small>
          <a *ngIf="language !== 'cz'" (click)="language = 'cz'">Česky</a>
          <strong *ngIf="language === 'cz'">Česky</strong>
        </small>
      </div>

      <h2>{{'app.title' | translate}}</h2>
      
      <hr>

      <div class="content">
        <ui-view></ui-view>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
  }

  set language(language: string) {
    this.translate.setDefaultLang(language)
  }

  get language(): string {
    return this.translate.getDefaultLang();
  }

}
