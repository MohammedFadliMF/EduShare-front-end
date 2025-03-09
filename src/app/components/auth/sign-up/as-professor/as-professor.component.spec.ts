import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsProfessorComponent } from './as-professor.component';

describe('AsProfessorComponent', () => {
  let component: AsProfessorComponent;
  let fixture: ComponentFixture<AsProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
