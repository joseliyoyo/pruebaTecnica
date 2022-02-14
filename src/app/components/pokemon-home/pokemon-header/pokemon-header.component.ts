import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {

  // ENTRADAS:

  // EVENTOS / SALIDAS:
  @Output() clickHeader = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  /**
   * Se emite el evento al hacer click en la cabecera
   */
  onClick(){
    this.clickHeader.emit();
  }

}
