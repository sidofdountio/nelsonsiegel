import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelsonsiegelComponent } from './nelsonsiegel.component';

describe('NelsonsiegelComponent', () => {
  let component: NelsonsiegelComponent;
  let fixture: ComponentFixture<NelsonsiegelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelsonsiegelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NelsonsiegelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
