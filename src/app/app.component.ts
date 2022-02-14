import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'root-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService) {
    // Lenguaje por defecto: establecemos el ingles, se usara cuando no se entuentre el lenguaje seleccionado
    translate.setDefaultLang('en');

     // Inicialmente mostramos la aplicación en el idioma configurado en el navegador.
    translate.use(<string>translate.getBrowserLang());
  }
  ngOnInit(): void {
  }


}
