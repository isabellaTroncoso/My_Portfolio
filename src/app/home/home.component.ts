import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  imports: [ProjectsComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
