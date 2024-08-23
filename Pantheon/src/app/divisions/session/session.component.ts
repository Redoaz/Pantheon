import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { SessionheaderComponent } from './sessionheader/sessionheader.component';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MainsessionComponent, SessionheaderComponent, RouterOutlet],
  templateUrl: './session.component.html',
  styleUrl: './session.component.less'
})
export class SessionComponent implements AfterViewInit {
  
  @ViewChild(MainsessionComponent) childReference;
  
  exampleParent!: String;

  ngAfterViewInit(): void {
    this.exampleParent = this.childReference.exampleChild;
  }
  
}