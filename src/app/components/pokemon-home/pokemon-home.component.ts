import { Component, OnInit } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';

@Component({
  selector: 'pokemon-home',
  templateUrl: './pokemon-home.component.html',
  styleUrls: ['./pokemon-home.component.scss']
})
export class PokemonHomeComponent implements OnInit {

  // PROPIEDADES:

  // Pokemon Seleccionado:
  // Si tiene valor, mostraremos el detalle.
  // EOC, mostraremos el listado
  pokemonSelected: Reference | null;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Seleccionamos pokemon
   * @param pokemonReference
   */
  onSelectItem(pokemonReference: Reference){
    this.pokemonSelected = pokemonReference;
  }

  /**
   * Al hacer click en la cabecera Deseleccionamos pokemon y la vista mostrara el listado
   */
  onClickHeader(){
    this.pokemonSelected = null;
  }

}
