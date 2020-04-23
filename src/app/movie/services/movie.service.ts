import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Movies } from '../models/Movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies() {
    return of(Movies);
  }

  getMoviebyid(id: number) {
    return of( Movies.find (movies => +movies.id === +id)
    );
  }
}
