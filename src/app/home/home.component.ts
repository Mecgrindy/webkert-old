import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movie/movies';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = MOVIES;
  category = 'movie';

  constructor() { }

  ngOnInit() {
  }

}
