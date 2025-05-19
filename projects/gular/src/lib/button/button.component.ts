import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Output() glClick = new EventEmitter<void>();

  getClass(): string {
    const classes = [
      this.getColor(),
      this.getSize(),
      'px-4',
      'py-2',
      'rounded',
      'cursor-pointer',
      'transition-all',
      'duration-300',
      'ease-in-out',
    ];

    if (this.disabled) {
      classes.push('opacity-85', 'cursor-not-allowed');
    }

    return classes.join(' ');
  }

  getColor(): string {
    switch (this.color) {
      case 'primary':
        return 'bg-blue-500 text-white hover:bg-blue-700';
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-700';
      case 'success':
        return 'bg-green-500 text-white hover:bg-green-700';
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-700';
      case 'warning':
        return 'bg-yellow-500 text-white hover:bg-yellow-700';
      case 'info':
        return 'bg-teal-500 text-white hover:bg-teal-700';
      case 'light':
        return 'bg-white border text-black';
      default:
        return 'bg-blue-500 text-white hover:bg-blue-670';
    }
  }

  getSize(): string {
    switch (this.size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  }

  onClick(): void {
    this.glClick.emit();
  }
}
