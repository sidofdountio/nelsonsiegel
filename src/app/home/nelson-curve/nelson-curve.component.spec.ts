import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelsonCurveComponent } from './nelson-curve.component';

describe('NelsonCurveComponent', () => {
  let component: NelsonCurveComponent;
  let fixture: ComponentFixture<NelsonCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelsonCurveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NelsonCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
