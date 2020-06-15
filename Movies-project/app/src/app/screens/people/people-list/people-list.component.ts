import {Component, OnDestroy, OnInit} from '@angular/core';
import {IPerson} from 'src/app/Interfaces/person';
import {TmdbService} from 'src/app/services/tmdb/tmdb.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  searchText = '';
  people: IPerson[] = [];

  constructor(private tmdbService: TmdbService) {
  }

  ngOnInit(): void {
    this.tmdbService.discoverPopularPeople()
      .pipe(takeUntil(this._destroy$))
      .subscribe((people) => {
        this.people = people;
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
