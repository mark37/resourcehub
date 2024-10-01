import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecentComponent } from './no-recent.component';

describe('NoRecentComponent', () => {
  let component: NoRecentComponent;
  let fixture: ComponentFixture<NoRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoRecentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
