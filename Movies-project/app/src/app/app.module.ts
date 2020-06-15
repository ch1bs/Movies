import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './screens/home/home.component';
import {MoviesListComponent} from './screens/movies/movies-list/movies-list.component';
import {PeopleListComponent} from './screens/people/people-list/people-list.component';
import {TvSeriesListComponent} from './screens/tv-series/tv-series-list/tv-series-list.component';
import {MoviesListItemComponent} from './screens/movies/movies-list-item/movies-list-item.component';
import {MovieDetailsComponent} from './screens/movies/movie-details/movie-details.component';
import {HttpClientModule} from '@angular/common/http';
import {TvSeriesListItemComponent} from './screens/tv-series/tv-series-list-item/tv-series-list-item.component';
import {TvSeriesDetailsComponent} from './screens/tv-series/tv-series-details/tv-series-details.component';
import {PeopleListItemComponent} from './screens/people/people-list-item/people-list-item.component';
import {PeopleDetailsComponent} from './screens/people/people-details/people-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MoviesFiltersComponent} from './screens/movies/movies-filters/movies-filters.component';
import {TvSeriesFiltersComponent} from './screens/tv-series/tv-series-filters/tv-series-filters.component';
import {FilterPipe} from './pipes/filter/filter.pipe';
import {ImgFallbackDirective} from './directives/img-fallback/img-fallback.directive';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AuthComponent} from './screens/auth/auth.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {AlertModule} from 'ngx-bootstrap/alert';
import {NgxPopper} from 'angular-popper';
import {DropdownDirective} from './directives/dropdown/dropdown.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesListComponent,
    PeopleListComponent,
    TvSeriesListComponent,
    MoviesListItemComponent,
    MovieDetailsComponent,
    TvSeriesListItemComponent,
    TvSeriesDetailsComponent,
    PeopleListItemComponent,
    PeopleDetailsComponent,
    MoviesFiltersComponent,
    TvSeriesFiltersComponent,
    FilterPipe,
    ImgFallbackDirective,
    AuthComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ButtonsModule.forRoot(),
    AlertModule.forRoot(),
    NgxPopper,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
