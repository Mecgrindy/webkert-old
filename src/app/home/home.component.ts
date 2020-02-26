import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  str = 'Hello';
  nmb = 1;

  constructor() { }

  ngOnInit() {
    this.str += ' World' + ' ' + this.nmb;
  }

}
