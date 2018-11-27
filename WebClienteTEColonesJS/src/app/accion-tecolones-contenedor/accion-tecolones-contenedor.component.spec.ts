import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionTecolonesContenedorComponent } from './accion-tecolones-contenedor.component';

describe('AccionTecolonesContenedorComponent', () => {
  let component: AccionTecolonesContenedorComponent;
  let fixture: ComponentFixture<AccionTecolonesContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionTecolonesContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionTecolonesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
