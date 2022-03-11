import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2ViewComponent } from './select2-view.component';

describe('Select2ViewComponent', () => {
  let component: Select2ViewComponent;
  let fixture: ComponentFixture<Select2ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Select2ViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
