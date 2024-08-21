import { Routes } from '@angular/router';
import { LegalComponent } from './landing/legal/legal.component';
import { LandingComponent } from './landing/landing.component';
import { MainSetterComponent } from './divisions/setter/main-setter/main-setter.component';

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
        path: 'setter', component: MainSetterComponent,
        loadChildren: () => import('./divisions/setter/setter-route').then(mod => mod.setterroute)
    },
    {
        path: 'landing', component: LandingComponent
    },
    {
        path: '**', component: LandingComponent
    }
];
