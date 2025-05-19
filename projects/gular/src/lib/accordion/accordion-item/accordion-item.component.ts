import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionThrowerComponent } from '../accordion-thrower/accordion-thrower.component';

@Component({
  selector: 'gl-accordion-item',
  imports: [],
  standalone: true,
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
})
export class AccordionItemComponent implements AfterContentInit {
  @Input() id!: string;
  isOpen: boolean = false;

  @ContentChild(AccordionThrowerComponent)
  thrower!: AccordionThrowerComponent;

  constructor(@Optional() private parent: AccordionComponent) {}

  ngOnInit() {
    this.parent?.addItem(this);
  }

  ngAfterContentInit(): void {
    this.thrower?.setOpen(this.isOpen);
  }

  toggle() {
    this.parent?.toggle(this.id);
  }

  setOpen(open: boolean) {
    if (this.isOpen !== open) {
      this.isOpen = open;
      this.thrower?.setOpen(this.isOpen);
    }
  }
}
