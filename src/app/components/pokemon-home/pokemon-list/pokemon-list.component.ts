import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { Reference } from 'src/app/models/reference.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  // ENTRADAS:


  // EVENTOS / SALIDAS:
  // Devuelve la referencia al pokemon seleccionado en el listado
  @Output() selectItem = new EventEmitter<Reference>();

  // PROPIEDADES:
  // Listado de Pokemons
  pokemonList: PokemonList;

  sizePage: number = environment.sizePage;

  constructor(private pokemonService: PokemonService) {

  }

  /**
   * Obtenemos el listado inicial de pokemons al crear el componente
   */
  ngOnInit(): void {
    this.getListPokemon();
  }

  /**
   * Obtiene el listado de pokemons
   */
  public getListPokemon(){
      this.pokemonService.getListPokemon(0, this.sizePage).subscribe({
        next: pokemonList => this.onGetListPokemon(pokemonList)
      }
    );
  }
  private onGetListPokemon(pokemonList: PokemonList){
    this.pokemonList = pokemonList;
  }

  /**
   * Emite evento de seleccion de pokemon
   * @param pokemonReference
   */
  onClickItem(pokemonReference: Reference){
    this.selectItem.emit(pokemonReference);
  }

}
