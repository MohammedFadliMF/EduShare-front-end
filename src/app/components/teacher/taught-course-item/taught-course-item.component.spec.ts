import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaughtCourseItemComponent } from './taught-course-item.component';

describe('TaughtCourseItemComponent', () => {
  let component: TaughtCourseItemComponent;
  let fixture: ComponentFixture<TaughtCourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaughtCourseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaughtCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
