import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../movie/movies';
import { CATEGORIES } from '../category/categories';
import { Movie } from '../movie/movie';
/* import { CATEGORIES } from '../category/categories';
import { Movie } from '../movie/movie'; */

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = CATEGORIES;
  favorites = [];
  //  ng g int

  movies = MOVIES;
  category = '';
  // 

  constructor() { }

  ngOnInit() {
  }

  onSelect(event: string) {
    console.log(event);
    this.category = event;
  }

  onFavorite(event: Movie) {
    this.favorites.push(event);
  }
  /*  */

  /* 
  } */

}
