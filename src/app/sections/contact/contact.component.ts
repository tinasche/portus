import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styles: ``
})
export class ContactComponent {
  YEAR = new Date().getFullYear();

}
