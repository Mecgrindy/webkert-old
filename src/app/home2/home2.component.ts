import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  str = '2';
  nmb = 1;

  constructor() { }

  getHello(str: string, nmb: number): number {
    return (str as unknown as number) + nmb;
  }
}
