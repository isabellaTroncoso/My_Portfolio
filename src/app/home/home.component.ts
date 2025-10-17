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
export class HomeComponent implements AfterViewInit{

    menuOpen = false; // ← styr om menyn är öppen eller stängd

   constructor() { }

  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.querySelector('.background-video');
    if (video) {
      video.muted = true; 
      video.play().catch(err => console.log('Autoplay blocked:', err));
    }
  }

  scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false; // stäng hamburgermeny efter scroll
  }
}


   // ← anropas när användaren trycker på hamburger-knappen
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }


}
