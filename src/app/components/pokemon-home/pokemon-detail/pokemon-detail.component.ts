import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Reference } from 'src/app/models/reference.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  // ENTRADAS:
  // Referencia del pokemon
  @Input() pokemonReference: Reference;

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  /**
   * Al iniciar el componente, obtenemos pokemon
   */
  ngOnInit(): void {
    this.getPokemon();
  }

  /**
   * Metodo que obtiene pokemon (Si tenemos la referencia de entrada)
   */
  public getPokemon(){
    if(this.pokemonReference){
      this.pokemonService.getPokemonByName(this.pokemonReference.name).subscribe({
        next: pokemon => this.onGetPokemonDetail(pokemon)
      });
    }
  }
  private onGetPokemonDetail(pokemon: Pokemon){
    this.pokemon = pokemon;
  }

  /**
   * Tipos separados por comas para mostrar en la vista
   */
  get type(): string{
    if(this.pokemon && this.pokemon.types){
      return this.pokemon.types.map(o => o.type.name).join(', ');
    } else{
      return '';
    }
  }

}
