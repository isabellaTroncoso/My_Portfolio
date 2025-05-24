import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
name = '';
  email = '';
  message = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      });

      alert('Thank you for reaching out! I will get back to you soon.');

      this.name = '';
      this.email = '';
      this.message = '';
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }
}
