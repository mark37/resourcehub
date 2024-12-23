import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLabelComponent } from './error-label.component';

describe('ErrorLabelComponent', () => {
  let component: ErrorLabelComponent;
  let fixture: ComponentFixture<ErrorLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
