import { Component } from '@angular/core';

@Component({
  selector: 'app-school-projects',
  imports: [],
  templateUrl: './school-projects.component.html',
  styleUrl: './school-projects.component.css'
})
export class SchoolProjectsComponent {

  openRepo(url: string) {
  window.open(url, '_blank');
}

}
