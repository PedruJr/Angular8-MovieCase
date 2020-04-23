import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../models/Movies.model';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: Movies;
  
  constructor() { }

  ngOnInit(): void {
  }

}
