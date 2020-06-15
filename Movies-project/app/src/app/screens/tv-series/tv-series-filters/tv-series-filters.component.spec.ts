import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesFiltersComponent } from './tv-series-filters.component';

describe('TvSeriesFiltersComponent', () => {
  let component: TvSeriesFiltersComponent;
  let fixture: ComponentFixture<TvSeriesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
