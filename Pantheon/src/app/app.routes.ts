import { Routes } from '@angular/router';
import { LegalComponent } from './landing/legal/legal.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'session',
        loadChildren: () => import('./divisions/session/session-route').then(mod => mod.sessionroute)
    },
    {
        path: 'legal', component: LegalComponent
    },
    {
        path: '**', component: LandingComponent
    }
];
