import { Routes } from '@angular/router';
import { SessionComponent } from './session.component';
import { MainSetterComponent } from '../setter/main-setter/main-setter.component';
import { MainsessionComponent } from './mainsession/mainsession.component';

export const sessionroute: Routes = [
  {
    path: '', component: SessionComponent
  },
  {
    path: 'main', component: MainsessionComponent
  },
  {
    path: 'setter', component: MainSetterComponent
  }
];

