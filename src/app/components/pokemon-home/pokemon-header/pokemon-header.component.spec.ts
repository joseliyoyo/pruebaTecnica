import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';

import { PokemonHeaderComponent } from './pokemon-header.component';

describe('PokemonHeaderComponent', () => {
  let component: PokemonHeaderComponent;
  let fixture: ComponentFixture<PokemonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClientTestingModule],
          }
        }),
      ],
      declarations: [ PokemonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente creado', () => {
    expect(component).toBeTruthy();
  });

  it('Emitir clickHeader al hacer click en cabecera', () => {
    spyOn(component.clickHeader, 'emit');
    const btnElement = fixture.debugElement.query(By.css('h1.header'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.clickHeader.emit).toHaveBeenCalled();
 });
});
