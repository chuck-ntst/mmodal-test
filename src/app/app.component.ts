import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mmodal';


  public fluencyDirectTest(): void {
    console.log('Made it here 1');
  }
}
