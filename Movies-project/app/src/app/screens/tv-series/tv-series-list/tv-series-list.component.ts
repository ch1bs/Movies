import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITVSerie} from 'src/app/Interfaces/tvSerie';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {IDiscoverTvSeriesDataParams} from '../../../Interfaces/responses';
import {DataStorageService} from '../../../services/data-storage/data-storage.service';
import {AuthService} from '../../../services/auth/auth.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TMDB_SORTING_OPTIONS} from '../../../configs/tmdb-sorting-options.config';
import {TMDB_YEARS_OPTIONS} from '../../../configs/tmdb-years-options.config';
import {TMDB_GENRE_OPTIONS} from '../../../configs/tmdb-genre-options.config';

@Component({
  selector: 'app-tv-series-list',
  templateUrl: './tv-series-list.component.html',
  styleUrls: ['./tv-series-list.component.scss'],
})
export class TvSeriesListComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  tvSeries: ITVSerie[];
  currentUser: any;
  filterSettings: IDiscoverTvSeriesDataParams = {
    sort_by: TMDB_SORTING_OPTIONS[0].value.toString(),
    first_air_date: TMDB_YEARS_OPTIONS[0].value.toString(),
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
      .discoverTv(this.filterSettings)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tvSeries) => {
        this.tvSeries = tvSeries;
      });

    this._authService.userState
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
      });

  }

  onGenreChanged(genre: string): void {
    this.filterSettings.with_genres = genre;
    this._tmdbService.discoverTv(this.filterSettings)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tvSeries) => {
        this.tvSeries = tvSeries;
      });
  }

  onYearsChanged(releaseYear: string): void {
    this.filterSettings.first_air_date = releaseYear;
    this._tmdbService.discoverTv(this.filterSettings)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tvSeries) => {
        this.tvSeries = tvSeries;
      });
  }

  onSortByChanged(sort: string): void {
    this.filterSettings.sort_by = sort;
    this._tmdbService.discoverTv(this.filterSettings)
      .pipe(takeUntil(this.destroy$))
      .subscribe((tvSeries) => {
        this.tvSeries = tvSeries;
      });
  }

  addToWatchList(tvSerie: ITVSerie): void {

    this._dataStorageService.addMediaToWatchList(tvSerie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('successfully added to watchlist');
      }
    });
  }

  addToFavorites(tvSerie: ITVSerie): void {
    this._dataStorageService.addMediaToFavorites(tvSerie, this.currentUser.uid, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('successfully added to favorites');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
