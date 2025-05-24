import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ])
      // :leave är borttagen – ingen animation när det försvinner
    ])
  ]
})
export class AboutComponent {
  showMore = false;

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}

