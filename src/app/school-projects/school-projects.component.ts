import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-projects',
  imports: [CommonModule, RouterLink],
  templateUrl: './school-projects.component.html',
  styleUrl: './school-projects.component.css'
})
export class SchoolProjectsComponent {

  openRepo(url: string) {
  window.open(url, '_blank');
}

}
