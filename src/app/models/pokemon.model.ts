import { Reference } from "./reference.model";

export class Pokemon {
  name: string;
  weight: number;
  height: number;
  types: Array<TypePokemon>;
  sprites: SpritesPokemon;
}

export class TypePokemon {
  slot: number;
  type: Reference;
}

export class SpritesPokemon {
  back_default: string;
  front_default: string;
}


