import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InterceptorService } from './services/interceptor.service';
import { AppComponent } from './app.component';
import { PokemonHomeComponent } from './components/pokemon-home/pokemon-home.component';
import { PokemonListComponent } from './components/pokemon-home/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-home/pokemon-detail/pokemon-detail.component';
import { PokemonItemComponent } from './components/pokemon-home/pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonHeaderComponent } from './components/pokemon-home/pokemon-header/pokemon-header.component';
import { PokemonPaginatorComponent } from './components/pokemon-home/pokemon-list/pokemon-paginator/pokemon-paginator.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './components/pokemon-home/pokemon-header/language-selector/language-selector.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    PokemonHomeComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonItemComponent,
    PokemonHeaderComponent,
    PokemonPaginatorComponent,
    AppComponent,
    LanguageSelectorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
