import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './sections/about/about.component';
import {ExperienceComponent} from './sections/experience/experience.component';
import {ProjectsComponent} from './sections/projects/projects.component';
import {EducationComponent} from './sections/education/education.component';
import {SkillsComponent} from './sections/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, EducationComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'portfolio';
  YEAR = new Date().getFullYear();
}
