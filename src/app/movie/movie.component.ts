import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'web-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() hasAction = true;
  @Input() movie: Movie;
  @Output() getMovie = new EventEmitter<Movie | null>();

  constructor() { }

  ngOnInit() {
  }

  toggleStar() {
    this.movie.star = !this.movie.star;
    this.getMovie.emit(this.movie);
  }

}
