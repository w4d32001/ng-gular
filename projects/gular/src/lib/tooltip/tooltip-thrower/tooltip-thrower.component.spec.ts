import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipThrowerComponent } from './tooltip-thrower.component';

describe('TooltipThrowerComponent', () => {
  let component: TooltipThrowerComponent;
  let fixture: ComponentFixture<TooltipThrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipThrowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipThrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
