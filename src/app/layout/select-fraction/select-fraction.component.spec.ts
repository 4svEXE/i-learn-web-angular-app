import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFractionComponent } from './select-fraction.component';

describe('SelectFractionComponent', () => {
  let component: SelectFractionComponent;
  let fixture: ComponentFixture<SelectFractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
