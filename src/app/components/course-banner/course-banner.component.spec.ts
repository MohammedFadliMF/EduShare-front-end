import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBannerComponent } from './course-banner.component';

describe('CourseBannerComponent', () => {
  let component: CourseBannerComponent;
  let fixture: ComponentFixture<CourseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
