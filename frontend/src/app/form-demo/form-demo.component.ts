import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'form-demo',
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {
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
