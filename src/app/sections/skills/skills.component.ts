import {Component} from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styles: ``
})
export class SkillsComponent {
  skills: string[] = ['Azure', 'C#', 'Java', 'TypeScript', 'Python', 'Docker', 'AWS', 'Flutter', 'MS Sql Server', 'Postgres', 'Kotlin' ,'Laravel'];

}
