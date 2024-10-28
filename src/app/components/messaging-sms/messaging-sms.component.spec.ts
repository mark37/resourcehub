import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingSmsComponent } from './messaging-sms.component';

describe('MessagingSmsComponent', () => {
  let component: MessagingSmsComponent;
  let fixture: ComponentFixture<MessagingSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingSmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagingSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
