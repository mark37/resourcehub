import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPartTimeComponent } from './recent-part-time.component';

describe('RecentPartTimeComponent', () => {
  let component: RecentPartTimeComponent;
  let fixture: ComponentFixture<RecentPartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPartTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentPartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
