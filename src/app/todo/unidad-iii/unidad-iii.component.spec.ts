import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadIIIComponent } from './unidad-iii.component';

describe('UnidadIIIComponent', () => {
  let component: UnidadIIIComponent;
  let fixture: ComponentFixture<UnidadIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadIIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
