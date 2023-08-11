import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNelsonSiegelComponent } from './add-nelson-siegel.component';

describe('AddNelsonSiegelComponent', () => {
  let component: AddNelsonSiegelComponent;
  let fixture: ComponentFixture<AddNelsonSiegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNelsonSiegelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNelsonSiegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
