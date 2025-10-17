import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
thankYouVisible = false;

  showThanks() {
    
    setTimeout(() => {
      this.thankYouVisible = true;
    }, 1000);
  }
}
