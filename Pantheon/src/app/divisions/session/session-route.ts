import { Routes } from '@angular/router';
import { MainSetterComponent } from '../setter/main-setter/main-setter.component';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { ReportsComponent } from '../reports/reports.component';
import { CodexComponent } from '../codex/codex.component';
import { RoutesComponent } from '../routes/routes.component';

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
    component: CatalogueComponent
  },
  {
    path: 'reports', outlet:"user-session",
    component: ReportsComponent
  },
  {
    path: 'codex', outlet:"user-session",
    component: CodexComponent
  },
  {
    path: 'routes', outlet:"user-session",
    component: RoutesComponent
  },
];

