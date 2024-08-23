import { Routes } from '@angular/router';
import { LegalComponent } from './landing/legal/legal.component';
import { LandingComponent } from './landing/landing.component';
import { MainSetterComponent } from './divisions/setter/main-setter/main-setter.component';
import { SessionComponent } from './divisions/session/session.component';

export const routes: Routes = [
    {
        path: '', outlet: "web",
         component: LandingComponent
    },
    {
        path: 'session', outlet: "web",
         component: SessionComponent,
        loadChildren: () => import('./divisions/session/session-route').then(mod => mod.sessionroute)
    },
    {
        path: 'legal', outlet: "web",
        component: LegalComponent
    },
    {
        path: 'landing', outlet: "web",
        component: LandingComponent
    },
    {
        path: '**', outlet: "web",
        component: LandingComponent
    }
];
