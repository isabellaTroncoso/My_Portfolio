import { AfterViewInit, Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  menuOpen = false;

  constructor() { }

  ngAfterViewInit() {
    
    const video: HTMLVideoElement | null = document.querySelector('.background-video');
    if (video) {
      video.muted = true;
      video.play().catch(err => console.log('Autoplay blocked:', err));
    }

     const photos: NodeListOf<HTMLElement> = document.querySelectorAll('.overlay-photo');
  let current = 0;

  if (photos.length > 0) {
    photos[current].classList.add('active');

    setInterval(() => {
      photos[current].classList.remove('active');
      current = (current + 1) % photos.length;
      photos[current].classList.add('active');
    }, 3000);
  }
}

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}