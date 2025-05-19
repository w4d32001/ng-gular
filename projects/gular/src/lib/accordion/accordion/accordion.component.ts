import { Component } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'gl-accordion',
  imports: [],
  standalone: true,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  private items: AccordionItemComponent[] = [];
  private openId: string | null = null;

  addItem(item: AccordionItemComponent) {
    this.items.push(item);
  }

  toggle(id: string) {
    this.openId = this.openId === id ? null : id;
    this.updateItems();
  }

  private updateItems() {
    this.items.forEach((item) => item.setOpen(item.id === this.openId));
  }
}
