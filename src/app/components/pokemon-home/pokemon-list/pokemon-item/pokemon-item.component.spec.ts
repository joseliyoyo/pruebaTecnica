import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PokemonItemComponent } from './pokemon-item.component';

describe('PokemonItemComponent', () => {
  let component: PokemonItemComponent;
  let fixture: ComponentFixture<PokemonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemComponent);
    component = fixture.componentInstance;
    component.pokemonReference = {name:'aaa', url: 'aaa'}
    fixture.detectChanges();
  });


  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Emitir clickItem al hacer click sobre un pokemon', () => {
    spyOn(component.clickItem, 'emit');
    const btnElement = fixture.debugElement.query(By.css('div.item'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.clickItem.emit).toHaveBeenCalled();
  });
});
