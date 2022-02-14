import { of } from 'rxjs';
import { pokemon } from '../mocks/pokemon.mock';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonService(httpClientSpy as any);
  });

  it('Servicio creado', () => {
    expect(service).toBeTruthy();
  });
  it('Deberia devolver un pokemon', (done: DoneFn) => {
    // Cuando haga un get me devolvera el mock
    httpClientSpy.get.and.returnValue(of(pokemon));
    service.getPokemonByName('url').subscribe((resultado) => {
      expect(resultado).toEqual(pokemon);
      done();
    });
  });
});
