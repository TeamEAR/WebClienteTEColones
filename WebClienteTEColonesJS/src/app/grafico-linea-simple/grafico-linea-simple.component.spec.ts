import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLineaSimpleComponent } from './grafico-linea-simple.component';

describe('GraficoLineaSimpleComponent', () => {
  let component: GraficoLineaSimpleComponent;
  let fixture: ComponentFixture<GraficoLineaSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLineaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLineaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
