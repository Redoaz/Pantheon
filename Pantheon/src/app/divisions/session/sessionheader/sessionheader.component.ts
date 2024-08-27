import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sessionheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessionheader.component.html',
  styleUrl: './sessionheader.component.less'
})
export class SessionheaderComponent implements OnInit {

  message:string = 'beep';
  handler: Location;

  constructor(private data: SessionService, location: Location, router: Router){ 
    this.handler = location;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  
  }

  goBack() {
    this.handler.back();
    console.log("patras!");
  }
}
