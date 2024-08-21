import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sessionheader',
  standalone: true,
  imports: [],
  templateUrl: './sessionheader.component.html',
  styleUrl: './sessionheader.component.less'
})
export class SessionheaderComponent {
  public href: string = "";
  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      console.log(this.router.url);
  }
  
}
