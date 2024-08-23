import { Routes } from '@angular/router';
import { MainSetterComponent } from '../setter/main-setter/main-setter.component';
import { MainsessionComponent } from './mainsession/mainsession.component';

export const sessionroute: Routes = [
  {
    path: '', outlet:"user-session",
    component: MainsessionComponent,
  },
  {
    path: 'setter', outlet:"user-session",
    component: MainSetterComponent
  },
  {
    path: 'inventory', outlet:"user-session",
    component: MainsessionComponent
  },
];

