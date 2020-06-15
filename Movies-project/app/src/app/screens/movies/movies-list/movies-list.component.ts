import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMovie} from 'src/app/Interfaces/movie';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';

import {IDiscoverMoviesDataParams} from '../../../Interfaces/responses';
import {DataStorageService} from '../../../services/data-storage/data-storage.service';
import {AuthService} from '../../../services/auth/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TMDB_SORTING_OPTIONS} from '../../../configs/tmdb-sorting-options.config';
import {TMDB_YEARS_OPTIONS} from '../../../configs/tmdb-years-options.config';
import {TMDB_GENRE_OPTIONS} from '../../../configs/tmdb-genre-options.config';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  movies: IMovie[];
  currentUser: any;
  filterSettings: IDiscoverMoviesDataParams = {
    sort_by: TMDB_SORTING_OPTIONS[0].value.toString(),
    primary_release_year: TMDB_YEARS_OPTIONS[0].value.toString(),
    with_genres: TMDB_GENRE_OPTIONS[0].value.toString(),
  };

  constructor(
    private _tmdbService: TmdbService,
    private _dataStorageService: DataStorageService,
    private _authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this._tmdbService
      .discoverMovies(this.filterSettings)
      .pipe(takeUntil(this._destroy$))
      .subscribe((movies) => {
        this.movies = movies;
      });


    this._authService
      .userState
      .pipe(takeUntil(this._destroy$))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  onGenreChanged(genre: string): void {
    this.filterSettings.with_genres = genre;
    this._tmdbService
      .discoverMovies(this.filterSettings)
      .pipe(takeUntil(this._destroy$))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  onYearsChanged(releaseYear: string): void {
    this.filterSettings.primary_release_year = releaseYear;
    this._tmdbService
      .discoverMovies(this.filterSettings)
      .pipe(takeUntil(this._destroy$))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  sortByChanged(sort: string): void {
    this.filterSettings.sort_by = sort;
    this._tmdbService
      .discoverMovies(this.filterSettings)
      .pipe(takeUntil(this._destroy$))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  addToWatchList(movie: IMovie): void {
    this._dataStorageService.addMediaToWatchList(movie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('successfully added to watchlist');
      }
    });
  }

  addToFavorites(movie: IMovie): void {
    this._dataStorageService.addMediaToFavorites(movie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('successfully added to favorites');
      }
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
