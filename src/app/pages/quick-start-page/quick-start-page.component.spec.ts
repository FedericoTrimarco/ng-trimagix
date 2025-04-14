import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickStartPageComponent } from './quick-start-page.component';

describe('QuickStartPageComponent', () => {
  let component: QuickStartPageComponent;
  let fixture: ComponentFixture<QuickStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickStartPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
