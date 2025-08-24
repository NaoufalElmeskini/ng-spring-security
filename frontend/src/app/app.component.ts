import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SimpleApiCallerComponent} from './api-caller/simple-api-caller.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SimpleApiCallerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
