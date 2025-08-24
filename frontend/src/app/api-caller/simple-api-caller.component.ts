import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'simple-api-caller',
  imports: [ReactiveFormsModule],
  templateUrl: './simple-api-caller.component.html',
  styleUrl: './simple-api-caller.component.css'
})
export class SimpleApiCallerComponent {
  welcomeMessage: string = '';

  constructor(private http: HttpClient) {
  }

  checkApi() {
    this.http.get('http://localhost:8080/api/bienvenue')
      .subscribe((val: any) => {
        console.log(val)
        this.welcomeMessage = val;
      })
  }

}
