import { Component, Input } from '@angular/core';

@Component({
  selector: 'css-container-queries-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() img = '';
}
