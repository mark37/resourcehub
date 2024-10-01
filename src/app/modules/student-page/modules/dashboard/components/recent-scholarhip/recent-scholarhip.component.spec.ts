import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentScholarhipComponent } from './recent-scholarhip.component';

describe('RecentScholarhipComponent', () => {
  let component: RecentScholarhipComponent;
  let fixture: ComponentFixture<RecentScholarhipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentScholarhipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentScholarhipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
