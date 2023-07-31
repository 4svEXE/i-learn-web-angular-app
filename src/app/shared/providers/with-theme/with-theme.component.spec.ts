import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithThemeComponent } from './with-theme.component';

describe('WithThemeComponent', () => {
  let component: WithThemeComponent;
  let fixture: ComponentFixture<WithThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
