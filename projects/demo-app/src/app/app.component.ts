import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../gular/src/public-api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AccordionComponent } from "../../../gular/src/lib/accordion/accordion/accordion.component";
import { AccordionThrowerComponent } from "../../../gular/src/lib/accordion/accordion-thrower/accordion-thrower.component";
import { AccordionContentComponent } from "../../../gular/src/lib/accordion/accordion-content/accordion-content.component";
import { AccordionItemComponent } from "../../../gular/src/lib/accordion/accordion-item/accordion-item.component";
import { AvatarComponent } from "../../../gular/src/lib/avatar/avatar/avatar.component";
import { AvatarImageComponent } from "../../../gular/src/lib/avatar/avatar-image/avatar-image.component";
import { AvatarFallbackComponent } from "../../../gular/src/lib/avatar/avatar-fallback/avatar-fallback.component";
@Component({
  selector: 'app-root',
  imports: [ButtonComponent, FontAwesomeModule, AccordionComponent, AccordionThrowerComponent, AccordionContentComponent, AccordionItemComponent, AvatarComponent, AvatarImageComponent, AvatarFallbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';
      faCoffee = faCoffee;
  click() {
    console.log('Button clicked!');
  }
  toggleAccordion() {
    console.log('Accordion toggled!');
  }
}
