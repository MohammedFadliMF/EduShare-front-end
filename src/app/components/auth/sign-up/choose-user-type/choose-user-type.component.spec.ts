import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUserTypeComponent } from './choose-user-type.component';

describe('ChooseUserTypeComponent', () => {
  let component: ChooseUserTypeComponent;
  let fixture: ComponentFixture<ChooseUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
