import { Component } from '@angular/core';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { SessionheaderComponent } from './sessionheader/sessionheader.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MainsessionComponent, SessionheaderComponent, RouterOutlet],
  templateUrl: './session.component.html',
  styleUrl: './session.component.less'
})
export class SessionComponent {
  parentExample: string ="division";
  
  
}