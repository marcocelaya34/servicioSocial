import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadIIComponent } from './unidad-ii.component';

describe('UnidadIIComponent', () => {
  let component: UnidadIIComponent;
  let fixture: ComponentFixture<UnidadIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
