import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-accordion-thrower',
  imports: [],
  standalone: true,
  templateUrl: './accordion-thrower.component.html',
  styleUrl: './accordion-thrower.component.css',
})
export class AccordionThrowerComponent {
  isOpen = false;

  setOpen(state: boolean) {
    this.isOpen = state;
    console.log('setOpen', state);
  }
}
