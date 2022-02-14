import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from '../models/pokemon-list.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene el listado de pokemons
   * @param offset Desplazamiento para la paginacion
   * @param limit Numero de resultados para la paginacion
   * @returns Observable de listado de Pokemons
   */
  getListPokemon(offset: number, limit: number): Observable<PokemonList>{
    return this.getListPokemonByUrl(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

    /**
   * Obtiene el listado de pokemons a partir de una URL de entrada
   * Será util para la paginacion
   * @param url Url a la que invocaremos
   * @returns Observable de listado de Pokemons
   */
  getListPokemonByUrl(url: string): Observable<PokemonList>{
    return this.http.get<PokemonList>(url);
  }

  /**
   * Obtiene un pokemon a partir de su nombre
   * @param url
   * @returns Observable de Pokemon
   */
  getPokemonByName(name:string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${name}`);
  }

}
