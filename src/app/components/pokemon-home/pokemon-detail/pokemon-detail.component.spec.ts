
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { createTranslateLoader } from 'src/app/app.module';
import { pokemon } from 'src/app/mocks/pokemon.mock';
import { referencePokemon } from 'src/app/mocks/reference-pokemon.mock';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetailComponent } from './pokemon-detail.component';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let pokemonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClientTestingModule],
          }
        }),
      ],
      declarations: [ PokemonDetailComponent],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.get(PokemonService);
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it("Si tenemos un pokemon de entrada: debe llamar a getPokemonByName y actualizar pokemon", () => {
    component.pokemonReference = referencePokemon;
    spyOn(pokemonService, 'getPokemonByName').and.returnValue(of(pokemon))
    component.getPokemon();
    fixture.detectChanges();
    expect(component.pokemon).toEqual(pokemon);
  });

  it("Si NO tenemos un pokemon de entrada: NO debe fallar", () => {
    expect(component.getPokemon()).toBeUndefined();
  });

  it("Resultado correcto de get tipo", () => {
    component.pokemon = pokemon;
    expect(component.type).toEqual('grass, poison');
  });
  it("Resultado correcto de get tipo SIN pokemon de entrada", () => {
    expect(component.type).toEqual('');
  });
});

