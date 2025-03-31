import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutComponent} from './sections/about/about.component';
import {ExperienceComponent} from './sections/experience/experience.component';
import {ProjectsComponent} from './sections/projects/projects.component';
import {EducationComponent} from './sections/education/education.component';
import {SkillsComponent} from './sections/skills/skills.component';
import {ContactComponent} from './sections/contact/contact.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, EducationComponent, SkillsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }

  ngOnInit(): void {
    AOS.init({
      delay: 1500,
      once: true,
      duration: 3000,
      easing: 'ease-in-out',
      startEvent: 'scroll'
    })
  }

  title = 'portfolio';
}
