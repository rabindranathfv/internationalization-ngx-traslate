import { Component } from '@angular/core';


// translate service
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internationalization-ngx-traslate';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
