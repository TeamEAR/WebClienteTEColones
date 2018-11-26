import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoColumnasSimplesComponent } from './grafico-columnas-simples.component';

describe('GraficoColumnasSimplesComponent', () => {
  let component: GraficoColumnasSimplesComponent;
  let fixture: ComponentFixture<GraficoColumnasSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoColumnasSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoColumnasSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
