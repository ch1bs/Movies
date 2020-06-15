import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesListItemComponent } from './tv-series-list-item.component';

describe('TvSeriesListItemComponent', () => {
  let component: TvSeriesListItemComponent;
  let fixture: ComponentFixture<TvSeriesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
