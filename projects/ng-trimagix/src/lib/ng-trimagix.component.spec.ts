import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTrimagixComponent } from './ng-trimagix.component';

describe('NgTrimagixComponent', () => {
  let component: NgTrimagixComponent;
  let fixture: ComponentFixture<NgTrimagixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTrimagixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTrimagixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
