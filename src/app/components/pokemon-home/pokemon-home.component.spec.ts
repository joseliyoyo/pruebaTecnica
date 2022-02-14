import { ComponentFixture, TestBed } from '@angular/core/testing';
import { referencePokemon } from '../../mocks/reference-pokemon.mock';
import { PokemonHomeComponent } from './pokemon-home.component';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Seleccion de Pokemon. Debe actualizarse pokemonSelected correctamente', () => {
    let pokemonSelected = referencePokemon;
    component.onSelectItem(pokemonSelected);
    expect(component.pokemonSelected).toEqual(pokemonSelected);
  });

  it('Click Cabecera. Se debe limpiar pokemonSelected', () => {
    component.pokemonSelected = referencePokemon;
    component.onClickHeader();
    expect(component.pokemonSelected).toBeNull();
  });

});
