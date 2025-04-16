import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmPageComponent } from './modal-confirm-page.component';

describe('ModalConfirmPageComponent', () => {
  let component: ModalConfirmPageComponent;
  let fixture: ComponentFixture<ModalConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConfirmPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
