import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutComponent} from './sections/about/about.component';
import {ExperienceComponent} from './sections/experience/experience.component';
import {ProjectsComponent} from './sections/projects/projects.component';
import {EducationComponent} from './sections/education/education.component';
import {SkillsComponent} from './sections/skills/skills.component';
import {ContactComponent} from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, EducationComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

  }

  title = 'portfolio';
}
