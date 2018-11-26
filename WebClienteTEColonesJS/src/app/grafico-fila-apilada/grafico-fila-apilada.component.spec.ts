import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFilaApiladaComponent } from './grafico-fila-apilada.component';

describe('GraficoFilaApiladaComponent', () => {
  let component: GraficoFilaApiladaComponent;
  let fixture: ComponentFixture<GraficoFilaApiladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFilaApiladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFilaApiladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
