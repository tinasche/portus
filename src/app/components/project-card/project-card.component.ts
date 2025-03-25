import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styles: ``
})
export class ProjectCardComponent {

  @Input({required: true}) projectItem: any;

}
