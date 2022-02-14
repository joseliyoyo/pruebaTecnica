import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { listPokemon } from 'src/app/mocks/list-pokemon.mock';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { referencePokemon } from '../../../mocks/reference-pokemon.mock';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PokemonListComponent],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pokemonService = TestBed.get(PokemonService);
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Emitir selectItem al seleccionar un elemento en la lista', () => {
    spyOn(component.selectItem, 'emit');
    component.onClickItem(referencePokemon);
    fixture.detectChanges();
    expect(component.selectItem.emit).toHaveBeenCalled();
  });

  it("Debe llamar a getListPokemon y actualizar listado", () => {
    let list: PokemonList = listPokemon;
    spyOn(pokemonService, 'getListPokemon').and.returnValue(of(list))
    component.getListPokemon();
    fixture.detectChanges();
    expect(component.pokemonList).toEqual(list);
  });
});
