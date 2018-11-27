import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMaterialesComponent } from './administracion-materiales.component';

describe('AdministracionMaterialesComponent', () => {
  let component: AdministracionMaterialesComponent;
  let fixture: ComponentFixture<AdministracionMaterialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministracionMaterialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
