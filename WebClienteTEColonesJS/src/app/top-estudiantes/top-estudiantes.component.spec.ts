import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEstudiantesComponent } from './top-estudiantes.component';

describe('TopEstudiantesComponent', () => {
  let component: TopEstudiantesComponent;
  let fixture: ComponentFixture<TopEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
