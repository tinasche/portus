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
    {name: 'Task Tracker', description: 'CLI based tool to keep track of your tasks. ', image: '', stack: ['Java', 'Gradle', 'JDBC', 'Apache Commons CLI', 'h2'], url: 'https://github.com/tinasche/tasker'},
    {name: 'connStringGen', description: 'A VS code extension for working with connectionstring in .NET', image: '', stack: ['TypeScript', 'NodeJS'], url: 'https://github.com/tinasche/connstringgen'},
    {name: 'Blogging platform', description: 'Share your experiences with a minimal blogging app.', image: '', stack: ['.NET Core','Minimal API', 'NextJS'], url: 'https://github.com/tinasche/blogformer'},
    {name: 'Github user activity', description: 'Get information about a github user from your commandline. You can see the user\'s repositories, projects and latest activity on their profile.', image: '', stack: ['Java', 'Gradle'], url: 'https://github.com/tinasche/tasker'},
    {name: 'Vegeland', description: 'Fresh fruits and vegetables delivered with the click of a button and enjoy the convenience of speedy delivery service right by your door step.', image: '', stack: ['Java', 'Gradle'], url: 'https://github.com/tinasche/tasker'},
    {name: 'Movie Reservation', description: 'SaaS to make reservations with real-time updates on ticket availability and theatre showings.', image: '', stack: ['Spring Boot', 'NextJS', 'Clerk'], url: 'https://github.com/tinasche/tasker'},
  ];
  
}
