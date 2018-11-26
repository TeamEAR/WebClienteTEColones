import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoFilaComponent } from './grafico-fila.component';

describe('GraficoFilaComponent', () => {
  let component: GraficoFilaComponent;
  let fixture: ComponentFixture<GraficoFilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoFilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
