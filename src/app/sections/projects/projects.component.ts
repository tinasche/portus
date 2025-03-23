import { Component } from '@angular/core';

type ProjectInfo = {
  name: string,
  description: string,
  image: string,
  stack: string[],
  url: string,
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {

  projects: ProjectInfo[] = [
    {name: '', description: '', image: '', stack: [], url: ''}
  ];


}
