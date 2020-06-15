import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITVSerie} from 'src/app/Interfaces/tvSerie';
import {ActivatedRoute} from '@angular/router';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tv-series-details',
  templateUrl: './tv-series-details.component.html',
  styleUrls: ['./tv-series-details.component.scss'],
})
export class TvSeriesDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  tvSerie: ITVSerie;
  routerParameterId: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tmdbService: TmdbService
  ) {
  }

  ngOnInit(): void {
    this.routerParameterId = this._activatedRoute.snapshot.params.id;
    this._tmdbService.discoverSingleTvSeries(this.routerParameterId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.tvSerie = response;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
