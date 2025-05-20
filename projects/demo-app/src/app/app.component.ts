import { Component } from '@angular/core';
import { ButtonComponent } from '../../../gular/src/public-api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AccordionComponent } from "../../../gular/src/lib/accordion/accordion/accordion.component";
import { AccordionThrowerComponent } from "../../../gular/src/lib/accordion/accordion-thrower/accordion-thrower.component";
import { AccordionContentComponent } from "../../../gular/src/lib/accordion/accordion-content/accordion-content.component";
import { AccordionItemComponent } from "../../../gular/src/lib/accordion/accordion-item/accordion-item.component";
import { AvatarComponent } from "../../../gular/src/lib/avatar/avatar/avatar.component";
import { AvatarImageComponent } from "../../../gular/src/lib/avatar/avatar-image/avatar-image.component";
import { CardComponent } from "../../../gular/src/lib/card/card/card.component";
import { CardHeaderComponent } from "../../../gular/src/lib/card/card-header/card-header.component";
import { CardTitleComponent } from "../../../gular/src/lib/card/card-title/card-title.component";
import { CardDescriptionComponent } from "../../../gular/src/lib/card/card-description/card-description.component";
import { CardContentComponent } from "../../../gular/src/lib/card/card-content/card-content.component";
import { CardFooterComponent } from "../../../gular/src/lib/card/card-footer/card-footer.component";
import { TooltipComponent } from "../../../gular/src/lib/tooltip/tooltip/tooltip.component";
import { TooltipContentComponent } from "../../../gular/src/lib/tooltip/tooltip-content/tooltip-content.component";
import { TooltipThrowerComponent } from "../../../gular/src/lib/tooltip/tooltip-thrower/tooltip-thrower.component";
@Component({
  selector: 'app-root',
  imports: [ButtonComponent, FontAwesomeModule, AccordionComponent, AccordionThrowerComponent, AccordionContentComponent, AccordionItemComponent, AvatarComponent, AvatarImageComponent, CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent, CardFooterComponent, TooltipComponent, TooltipContentComponent, TooltipThrowerComponent],
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
