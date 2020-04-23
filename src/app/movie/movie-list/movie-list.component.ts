import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  changeText: boolean;
  movies$: Observable<Movies[]>;
  constructor(private moviceService: MovieService) {
    this.changeText = false;
   }

  ngOnInit(): void {
    this.movies$ = this.moviceService.getMovies();
  }

}
