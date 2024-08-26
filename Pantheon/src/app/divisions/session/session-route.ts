import { Routes } from '@angular/router';
import { MainSetterComponent } from '../setter/main-setter/main-setter.component';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';

export const sessionroute: Routes = [
  {
    path: '', outlet:"user-session",
    component: MainsessionComponent,
    data:{ module:"black" }
  },
  {
    path: 'setter', outlet:"user-session",
    component: MainSetterComponent,
    data:{ module:"blue" }
  },
  {
    path: 'inventory', outlet:"user-session",
    component: CatalogueComponent,
    data:{ module:"orange" }
  },
];

