import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesListComponent } from './tv-series-list.component';

describe('TvSeriesListComponent', () => {
  let component: TvSeriesListComponent;
  let fixture: ComponentFixture<TvSeriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
