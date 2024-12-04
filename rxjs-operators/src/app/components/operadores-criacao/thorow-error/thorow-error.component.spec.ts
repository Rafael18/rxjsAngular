import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThorowErrorComponent } from './thorow-error.component';

describe('ThorowErrorComponent', () => {
  let component: ThorowErrorComponent;
  let fixture: ComponentFixture<ThorowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThorowErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThorowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
