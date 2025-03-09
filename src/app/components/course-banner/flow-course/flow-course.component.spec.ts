import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowCourseComponent } from './flow-course.component';

describe('FlowCourseComponent', () => {
  let component: FlowCourseComponent;
  let fixture: ComponentFixture<FlowCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
