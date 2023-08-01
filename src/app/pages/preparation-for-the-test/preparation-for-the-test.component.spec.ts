import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationForTheTestComponent } from './preparation-for-the-test.component';

describe('PreparationForTheTestComponent', () => {
  let component: PreparationForTheTestComponent;
  let fixture: ComponentFixture<PreparationForTheTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationForTheTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparationForTheTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
