import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon-list.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'pokemon-paginator',
  templateUrl: './pokemon-paginator.component.html',
  styleUrls: ['./pokemon-paginator.component.scss']
})
export class PokemonPaginatorComponent implements OnInit {

  // Lista: Entrada / salida
  @Input()  list: PokemonList;
  @Output() listChange = new EventEmitter<PokemonList>();

  // Tamaño de pagina
  @Input() sizePage: number;

  // Numero de pagina, inicializado a 1
  numPage: number = 1;

  // Se usa para evitar llamadas simulataneas a la paginación y evitar efectos no deseados
  loading: boolean = false;


  constructor(private pokemonService: PokemonService) {

  }

  ngOnInit(): void {
  }

  /**
   * Cambia de pagina
   * @param url URl para obtener la anterior o siguiente pagina
   * @param offsetPage Desplazamiento de pagina (1: pagina siguiente, -1: pagina anterior)
   */
  changePage(url: string | null, offsetPage: number){
    if(url && !this.loading){
      this.loading = true;
      this.pokemonService.getListPokemonByUrl(url).subscribe({
          next: list => {
            this.onGetList(list, offsetPage);
          },
          error: error => this.onError()
        }
      );
    }
  }

  /**
   * Cuando se obtiene la nueva pagina:
   *  - Se actualiza el listado
   *  - Se actualiza el numero de pagina actual
   *  - Se emite el evento con el nuevo listado, para que sea visible por el padre
   *  - Se establece loading a false
   * @param list
   * @param offsetPage
   */
  private onGetList(list: PokemonList, offsetPage: number){
    this.list = list;
    this.numPage = this.numPage + offsetPage;
    this.listChange.emit(list);
    this.loading = false;
  }

  /**
   * Si la llamada fallase, nos aseguramos de poner loading a false
   */
  private onError(){
    this.loading = false;
  }

}
