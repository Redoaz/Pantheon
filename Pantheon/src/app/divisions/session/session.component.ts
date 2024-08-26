import { Component, OnInit } from '@angular/core';
import { MainsessionComponent } from './mainsession/mainsession.component';
import { SessionheaderComponent } from './sessionheader/sessionheader.component';
import { Router, RouterOutlet } from '@angular/router';
import { SessionService } from './session.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MainsessionComponent, SessionheaderComponent, RouterOutlet],
  templateUrl: './session.component.html',
  styleUrl: './session.component.less'
})

export class SessionComponent implements OnInit{

  message:string = '';

  constructor(private data: SessionService, location: Location, router: Router){
    router.events.subscribe(val => {
      if (location.path() === "/(web:session/(user-session:setter))") {
        data.changeMessage("blue");
      }
      if (location.path() === "/(web:session)") {
          data.changeMessage("black");
      }
      if (location.path() === "/(web:session/(user-session:inventory))") {
        data.changeMessage("orange");
      } else {
        console.log(location.path())
      }
    });
  }

    
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }


}

