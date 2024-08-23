import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sessionheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessionheader.component.html',
  styleUrl: './sessionheader.component.less'
})
export class SessionheaderComponent {
  usersession = 'division';
}
