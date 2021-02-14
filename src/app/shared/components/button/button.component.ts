import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <button
    type="button"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
    (click)="clicked.emit($event)"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  clicked = new EventEmitter<Event>();

  get classes(): string[] {
    const mode = this.primary ? 'app-button--primary' : 'app-button--secondary';

    return ['app-button', `app-button--${this.size}`, mode];
  }
}
