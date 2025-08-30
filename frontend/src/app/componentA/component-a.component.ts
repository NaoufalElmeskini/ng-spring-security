import {Component} from '@angular/core';


@Component({
  selector: 'component-a',
  standalone: true,
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css'
})
export class componentAComponent {
  welcomeMessage: string = 'hey';


}
