import {Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styles: ``
})
export class SkillsComponent {
  skills: string[] = ['.NET Core', 'Spring Boot', 'TypeScript', 'Python', 'Docker', 'AWS', 'Azure', 'MS Sql Server', 'Postgres', 'Laravel'];

}
