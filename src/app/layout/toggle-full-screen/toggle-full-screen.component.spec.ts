import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleFullScreenComponent } from './toggle-full-screen.component';

describe('ToggleFullScreenComponent', () => {
  let component: ToggleFullScreenComponent;
  let fixture: ComponentFixture<ToggleFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleFullScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
