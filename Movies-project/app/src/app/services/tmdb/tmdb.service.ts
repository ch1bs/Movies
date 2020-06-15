import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  IDiscoverMoviesDataParams,
  IDiscoverResponse, IDiscoverTvSeriesDataParams,
  IPersonCombinedCreditsResponse,
} from 'src/app/Interfaces/responses';
import {Observable} from 'rxjs';
import {IMovie} from 'src/app/Interfaces/movie';
import {ITVSerie} from 'src/app/Interfaces/tvSerie';
import {IPersonDetails, IPerson} from 'src/app/Interfaces/person';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private _BASE_URL = 'https://api.themoviedb.org/3';
  private _API_KEY = 'ddd6fab2e5db2a56efc1f866365f656e';

  constructor(private _httpClient: HttpClient) {
  }

  private buildUrl(endpoint: string, params?: object): string {
    const queryParams = params
      ? Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&')
      : '';
    return `${this._BASE_URL}${endpoint}?api_key=${this._API_KEY}&${queryParams}`;
  }

  discoverMovies(params: IDiscoverMoviesDataParams): Observable<IMovie[]> {
    return this._httpClient.get<IDiscoverResponse<IMovie>>(
      this.buildUrl('/discover/movie', params)
    ).pipe(map(response => response.results));
  }

  discoverTv(params: IDiscoverTvSeriesDataParams): Observable<ITVSerie[]> {
    return this._httpClient.get<IDiscoverResponse<ITVSerie>>(
      this.buildUrl('/discover/tv', params)
    ).pipe(map(response => response.results));
  }

  discoverSingleMovie(id: number): Observable<IMovie> {
    return this._httpClient.get<IMovie>(this.buildUrl(`/movie/${id}`));
  }

  discoverSingleTvSeries(id: number): Observable<ITVSerie> {
    return this._httpClient.get<ITVSerie>(this.buildUrl(`/tv/${id}`));
  }

  discoverPopularPeople(): Observable<IPerson[]> {
    return this._httpClient.get<IDiscoverResponse<IPerson>>(
      this.buildUrl('/person/popular')
    ).pipe(map(response => response.results));
  }

  discoverSinglePersonDetails(id: number): Observable<IPersonDetails> {
    return this._httpClient.get<IPersonDetails>(this.buildUrl(`/person/${id}`));
  }

  personCombinedCredits(
    id: number
  ): Observable<IPersonCombinedCreditsResponse> {
    return this._httpClient.get<IPersonCombinedCreditsResponse>(
      this.buildUrl(`/person/${id}/combined_credits`)
    );
  }
}
