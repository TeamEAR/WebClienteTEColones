import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacometroComponent } from './tacometro.component';

describe('TacometroComponent', () => {
  let component: TacometroComponent;
  let fixture: ComponentFixture<TacometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacometroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
