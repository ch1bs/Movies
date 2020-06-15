import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPersonDetails} from 'src/app/Interfaces/person';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPersonCredit} from 'src/app/Interfaces/person';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  person: IPersonDetails;
  routeParameterId: number;
  credits: {
    cast: IPersonCredit[];
    crew: IPersonCredit[];
  } = {cast: [], crew: []};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _tmdbService: TmdbService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.routeParameterId = this._activatedRoute.snapshot.params.id;

    this._tmdbService
      .discoverSinglePersonDetails(this.routeParameterId)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response) => {
        this.person = response;
      });
    this._tmdbService
      .personCombinedCredits(this.routeParameterId)
      .pipe(takeUntil(this._destroy$))
      .subscribe((response) => {
        this.credits = {
          cast: response.cast,
          crew: response.crew,
        };
      });
  }


  redirectToMedia(mediaType: string, castId: string): void {
    const route = mediaType === 'movie' ? '/movies' : '/tv-series';
    this._router.navigate([route, castId]);
  }


  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
