import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadriculaDashboardComponent } from './cuadricula-dashboard.component';

describe('CuadriculaDashboardComponent', () => {
  let component: CuadriculaDashboardComponent;
  let fixture: ComponentFixture<CuadriculaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadriculaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadriculaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
