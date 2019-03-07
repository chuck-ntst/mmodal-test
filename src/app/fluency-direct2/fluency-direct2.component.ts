import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluency-direct2',
  templateUrl: './fluency-direct2.component.html',
  styleUrls: ['./fluency-direct2.component.css']
})
export class FluencyDirect2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fluencyDirectTest(): void {
    console.log('Made it here 2');
  }
}
