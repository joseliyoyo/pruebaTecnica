import { Reference } from "./reference.model";

export class PokemonList {
  // Numero total de pokemons
  count: number;

  // Pagina siguiente
  next: string | null;

  // Pagina anterior
  previous: string | null;

  // Lista de referencias a pokemons (name-url)
  results: Array<Reference>;
}
