import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorPageComponent } from './form-validator-page.component';

describe('FormValidatorPageComponent', () => {
  let component: FormValidatorPageComponent;
  let fixture: ComponentFixture<FormValidatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidatorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
