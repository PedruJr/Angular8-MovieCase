import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieInfoComponent,
  ],
  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
