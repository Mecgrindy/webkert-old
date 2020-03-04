import { Component } from '@angular/core';
import { MOVIES } from '../movie/movies';
import { CATEGORIES } from '../category/categories';
import { Movie } from '../movie/movie';
import { GAMES } from '../game/games';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = CATEGORIES;
  movies = MOVIES;
  games = GAMES;
  favorites = [];
  category = '';

  constructor() { }

  onSelect(event: string) {
    this.category = event;
  }

  onFavorite(event: Movie) {
    if (event && event.star) {
      this.favorites.push(event);
    }
    this.favorites = this.favorites.filter(favorite => favorite.star);
  }
}
