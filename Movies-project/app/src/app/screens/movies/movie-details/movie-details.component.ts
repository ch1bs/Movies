import {Component, OnDestroy, OnInit} from '@angular/core';
import {IMovie} from 'src/app/Interfaces/movie';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  movie: IMovie;
  routeParameterId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tmdbService: TmdbService
  ) {
  }

  ngOnInit(): void {
    this.routeParameterId = this._activatedRoute.snapshot.params.id;
    this._tmdbService
      .discoverSingleMovie(this.routeParameterId)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response) => {
        this.movie = response;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
