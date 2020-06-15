import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFiltersComponent } from './movies-filters.component';

describe('MoviesFiltersComponent', () => {
  let component: MoviesFiltersComponent;
  let fixture: ComponentFixture<MoviesFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
