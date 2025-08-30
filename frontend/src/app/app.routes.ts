import {Routes} from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'componentA',
    loadComponent: () =>
      import('./componentA/component-a.component').then(
        (m) => m.componentAComponent
      ),
  },
  {
    path: 'componentB',
    loadComponent: () =>
      import('./api-caller/simple-api-caller.component').then(
        (m) => m.SimpleApiCallerComponent
      ),
  },

];
