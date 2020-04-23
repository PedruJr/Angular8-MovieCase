import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movies } from '../models/Movies.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: Movies;
  movieSub$: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id');
    this.movieSub$ = this.movieService
    .getMoviebyid(this.id)
    .subscribe(movie =>{
      this.movie = movie;
      console.log(this.movie);
    });
  }
  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

}
