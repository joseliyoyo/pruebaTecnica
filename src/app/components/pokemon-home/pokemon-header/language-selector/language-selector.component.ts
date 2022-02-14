import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment'
@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  langs: Array<string> = environment.langsSupported;
  constructor(public translate: TranslateService) {

  }

  ngOnInit(): void {
  }

  /**
   * Establecemos el idioma seleccionado
   * @param lang
   */
  onClick(lang: string){
    this.translate.use(lang);
  }
}
