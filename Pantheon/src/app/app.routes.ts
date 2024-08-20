import { Routes } from '@angular/router';
import { LegalComponent } from './landing/legal/legal.component';
import { SessionComponent } from './divisions/session/session.component';
import { LandingComponent } from './landing/landing.component';
import { MainsessionComponent } from './divisions/session/mainsession/mainsession.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent
    },
    {
        path: 'session', component: SessionComponent
    },
    {
        path: 'legal', component: LegalComponent
    },
    {
        path: 'mainsession', component: MainsessionComponent
    },
    {
        path: '**', component: LandingComponent
    }
];
