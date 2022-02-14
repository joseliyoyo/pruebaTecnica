import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { createTranslateLoader } from 'src/app/app.module';
import { listPokemon } from 'src/app/mocks/list-pokemon.mock';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonService } from 'src/app/services/pokemon.service';

import { PokemonPaginatorComponent } from './pokemon-paginator.component';

describe('PokemonPaginatorComponent', () => {
  let component: PokemonPaginatorComponent;
  let fixture: ComponentFixture<PokemonPaginatorComponent>;
  let pokemonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          }
        }),
      ],
      declarations: [ PokemonPaginatorComponent ],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.get(PokemonService);
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it("Al cambiar de pagina debe llamar a getListPokemonByUrl, actualizar listado y emitir evento listChange", () => {
    let list: PokemonList = listPokemon;
    spyOn(pokemonService, 'getListPokemonByUrl').and.returnValue(of(list));
    spyOn(component.listChange, 'emit');
    component.changePage('url',15);
    fixture.detectChanges();
    expect(component.list).toEqual(list);
    expect(component.listChange.emit).toHaveBeenCalledWith(list);
  });

});

