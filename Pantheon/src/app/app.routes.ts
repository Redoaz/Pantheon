import { Routes } from '@angular/router';
import { LegalComponent } from './landing/legal/legal.component';
import { AppComponent } from './app.component';
import { SessionComponent } from './divisions/session/session.component';
export const routes: Routes = [
    {
        path: '', component: AppComponent
    },
    {
        path: 'session', component: SessionComponent
    },
    {
        path: 'legal', component: LegalComponent
    },
    {
        path: '**', component: AppComponent
    }
];
