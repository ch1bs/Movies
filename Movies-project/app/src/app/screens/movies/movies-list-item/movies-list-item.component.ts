import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IMovie } from 'src/app/Interfaces/movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss'],
})
export class MoviesListItemComponent {
  @Input() movie: IMovie;
  @Output() addedToWatchList = new EventEmitter<IMovie>();
  @Output() addedToFavorites = new EventEmitter<IMovie>();

  constructor(
    private _router: Router
  ) {}

  redirect(): void {
    this._router.navigate(['/movies', this.movie.id]);
  }

  addToWatchList(): void {
  this.addedToWatchList.emit(this.movie);
  }

  addToFavories(): void {
  this.addedToFavorites.emit(this.movie);
  }
}
