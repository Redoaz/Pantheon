import { Component } from '@angular/core';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { SessionheaderComponent } from './sessionheader/sessionheader.component';
@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MainsessionComponent, SessionheaderComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.less'
})
export class SessionComponent {

}
