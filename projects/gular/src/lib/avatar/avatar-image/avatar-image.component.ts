import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-avatar-image',
  imports: [],
  templateUrl: './avatar-image.component.html',
  styleUrl: './avatar-image.component.css'
})
export class AvatarImageComponent {
      @Input() src: string = '';
}
