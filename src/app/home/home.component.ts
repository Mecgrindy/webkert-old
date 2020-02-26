import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  description: string;
  imdb: number;
  lengthMin?: number;
  img?: string;
}

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    description: 'Thanos',
    imdb: 7,
    lengthMin: 180,
    img: 'https://images5.alphacoders.com/998/thumb-1920-998470.jpg'
  },
  {
    id: '2',
    title: 'Spiderman',
    description: 'Pokcsávó',
    imdb: 6.3,
    lengthMin: 113,
  },
  {
    id: '3',
    title: 'Matrix',
    description: 'Neo és az ügynökök',
    imdb: 8.3,
    lengthMin: 165,
  },
  {
    id: '4',
    title: 'Én kicsi pónim',
    description: 'Fabolous',
    imdb: 10
  }
];

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies = MOVIES;
  category = '';

  constructor() { }

  ngOnInit() {
    this.category = 'movie';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

}
