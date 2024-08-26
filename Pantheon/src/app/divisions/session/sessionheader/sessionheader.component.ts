import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sessionheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessionheader.component.html',
  styleUrl: './sessionheader.component.less'
})
export class SessionheaderComponent implements OnInit {

  message:string = 'beep';

  constructor(private data: SessionService){  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  
  }

}
