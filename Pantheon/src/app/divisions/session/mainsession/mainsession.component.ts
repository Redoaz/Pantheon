import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-mainsession',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainsession.component.html',
  styleUrl: './mainsession.component.less'
})

export class MainsessionComponent implements OnInit {

  message:string = '';

  constructor(private data: SessionService){  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  
  }

  changeColor(color: string){
    this.data.changeMessage(color)
  }
}
