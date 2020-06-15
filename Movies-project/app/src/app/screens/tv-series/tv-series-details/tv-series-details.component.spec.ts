import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSeriesDetailsComponent } from './tv-series-details.component';

describe('TvSeriesDetailsComponent', () => {
  let component: TvSeriesDetailsComponent;
  let fixture: ComponentFixture<TvSeriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvSeriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSeriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
