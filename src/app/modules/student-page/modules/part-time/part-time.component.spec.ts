import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimeComponent } from './part-time.component';

describe('PartTimeComponent', () => {
  let component: PartTimeComponent;
  let fixture: ComponentFixture<PartTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
