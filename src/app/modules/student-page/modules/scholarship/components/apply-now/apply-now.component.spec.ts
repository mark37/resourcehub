import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowComponent } from './apply-now.component';

describe('ApplyNowComponent', () => {
  let component: ApplyNowComponent;
  let fixture: ComponentFixture<ApplyNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
