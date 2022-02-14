import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';

@Component({
  selector: 'pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {

  // ENTRADAS:
  @Input() pokemonReference: Reference;

  // EVENTOS / SALIDAS:
  // Devuelve el la referencia del pokemon al hacer click sobre el item
  @Output() clickItem = new EventEmitter<Reference>();

  constructor() {}

  ngOnInit(): void {
  }

  onClickItem(){
    this.clickItem.emit(this.pokemonReference);
  }

}
