import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadIVComponent } from './unidad-iv.component';

describe('UnidadIVComponent', () => {
  let component: UnidadIVComponent;
  let fixture: ComponentFixture<UnidadIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadIVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
