import { Component } from '@angular/core';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';

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
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styles: ``
})
export class ProjectsComponent {

  projects: ProjectInfo[] = [
    {name: 'Task Tracker', description: 'CLI based tool to keep track of your tasks. ', image: '', stack: ['Java', 'Gradle', 'Apache Commons CLI', 'h2'], url: 'https://github.com/tinasche/tasker'},
    {name: 'Workout Tracker', description: 'CLI based tool to keep track of your tasks. ', image: '', stack: ['Spring Boot', 'Angular'], url: 'https://github.com/tinasche/workit'},
    {name: 'Blogging platform', description: 'CLI based tool to keep track of your tasks. ', image: '', stack: ['.NET Core', 'NextJS'], url: 'https://github.com/tinasche/blogformer'},
    {name: 'Github user activity', description: 'Get information about a github user from your commandline. You can see the user\'s repositories, projects and latest activity on their profile.', image: '', stack: ['Java', 'Gradle'], url: 'https://github.com/tinasche/tasker'},
    {name: 'Vegeland', description: 'Get the freshest fruits and vegetables with the click of a button on your phone and enjoy the convenience of speedy delivery service right by your door step.', image: '', stack: ['Java', 'Gradle'], url: 'https://github.com/tinasche/tasker'},
    {name: 'Movie Reservation', description: 'SaaS to make reservations with live updates on', image: '', stack: ['Spring Boot', 'NextJS', 'Clerk'], url: 'https://github.com/tinasche/tasker'},
  ];


}
