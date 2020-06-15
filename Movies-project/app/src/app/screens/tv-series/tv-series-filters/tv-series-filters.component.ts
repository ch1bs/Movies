import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ISelectOption} from 'src/app/Interfaces/selectOptions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TMDB_YEARS_OPTIONS} from '../../../configs/tmdb-years-options.config';
import {TMDB_SORTING_OPTIONS} from '../../../configs/tmdb-sorting-options.config';
import {TMDB_GENRE_OPTIONS} from '../../../configs/tmdb-genre-options.config';

@Component({
  selector: 'app-tv-series-filters',
  templateUrl: './tv-series-filters.component.html',
  styleUrls: ['./tv-series-filters.component.scss'],
})
export class TvSeriesFiltersComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  @Output() sortByChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() yearsChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() genreChanged: EventEmitter<string> = new EventEmitter<string>();

  filterFormGroup: FormGroup;
  filterSortByOptions: ISelectOption[] = TMDB_SORTING_OPTIONS;
  filterGenreOptions: ISelectOption[] = TMDB_GENRE_OPTIONS;
  filterYearsOptions: ISelectOption[] = TMDB_YEARS_OPTIONS;

  constructor() {
    this.filterFormGroup = new FormGroup({
      year: new FormControl(TMDB_YEARS_OPTIONS[0]),
      sortBy: new FormControl(TMDB_SORTING_OPTIONS[0]),
      genre: new FormControl(TMDB_GENRE_OPTIONS[0]),
    });
  }

  ngOnInit(): void {
    this.filterFormGroup
      .get('year')
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((option: ISelectOption) => {
        this.yearsChanged.emit(option.value.toString());
      });

    this.filterFormGroup
      .get('sortBy')
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((option: ISelectOption) => {
        this.sortByChanged.emit(option.value.toString());
      });

    this.filterFormGroup
      .get('genre')
      .valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((option: ISelectOption) => {
        this.genreChanged.emit(option.value.toString());
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
