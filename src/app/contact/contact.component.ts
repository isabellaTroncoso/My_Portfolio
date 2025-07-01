import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';


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
      const serviceID = 'service_734c4fu';
      const templateID = 'template_qj4235s';
      const userID = 'W7P58MtfdwxWd6V3d';

      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Tack för ditt meddelande! Jag hör av mig så snart jag kan.');
          this.name = '';
          this.email = '';
          this.message = '';
        }, (err) => {
          console.error('FAILED...', err);
          alert('Något gick fel. Försök igen senare.');
        });
    } else {
      alert('Vänligen fyll i alla fält.');
    }
  }
}
