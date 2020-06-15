import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {MoviesListComponent} from './screens/movies/movies-list/movies-list.component';
import {TvSeriesListComponent} from './screens/tv-series/tv-series-list/tv-series-list.component';
import {PeopleListComponent} from './screens/people/people-list/people-list.component';
import {MovieDetailsComponent} from './screens/movies/movie-details/movie-details.component';
import {TvSeriesDetailsComponent} from './screens/tv-series/tv-series-details/tv-series-details.component';
import {PeopleDetailsComponent} from './screens/people/people-details/people-details.component';
import {AuthComponent} from './screens/auth/auth.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'tv-series',
    component: TvSeriesListComponent
  },
  {
    path: 'tv-series/:id',
    component: TvSeriesDetailsComponent
  },
  {
    path: 'people',
    component: PeopleListComponent
  },
  {
    path: 'people/:id',
    component: PeopleDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
