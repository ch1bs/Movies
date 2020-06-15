import {IPersonCredit} from './person';

export interface IDiscoverResponse<T> {
  page: number;
  total_results: number;
  total_pages: number;
  results: T[];
}

export interface IDiscoverMoviesDataParams{
  sort_by: string;
  primary_release_year: string;
  with_genres: string;
}

export interface IDiscoverTvSeriesDataParams{
  sort_by: string;
  first_air_date: string;
  with_genres: string;
}

export interface IPersonCombinedCreditsResponse {
  id: number;
  crew: Array<IPersonCredit>;
  cast: Array<IPersonCredit>;
}
