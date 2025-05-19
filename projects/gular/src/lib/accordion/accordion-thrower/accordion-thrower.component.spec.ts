import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionThrowerComponent } from './accordion-thrower.component';

describe('AccordionThrowerComponent', () => {
  let component: AccordionThrowerComponent;
  let fixture: ComponentFixture<AccordionThrowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionThrowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionThrowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
