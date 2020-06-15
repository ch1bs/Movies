import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITVSerie} from 'src/app/Interfaces/tvSerie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tv-series-list-item',
  templateUrl: './tv-series-list-item.component.html',
  styleUrls: ['./tv-series-list-item.component.scss'],
})
export class TvSeriesListItemComponent {
  @Input() tvSerie: ITVSerie;
  @Output() addedToWatchList = new EventEmitter<ITVSerie>();
  @Output() addedToFavorites = new EventEmitter<ITVSerie>();

  constructor(private _router: Router) {
  }

  redirect(): void {
    this._router.navigate(['/tv-series', this.tvSerie.id]);
  }

  addToWatchList(): void {
    this.addedToWatchList.emit(this.tvSerie);
  }

  addToFavories(): void {
    this.addedToFavorites.emit(this.tvSerie);
  }
}
