import {Component, Input, OnInit} from '@angular/core';
import {IPerson} from 'src/app/Interfaces/person';
import {Router} from '@angular/router';
import {isMovie} from '../../../services/tmdb/constants';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss'],
})
export class PeopleListItemComponent implements OnInit {

  @Input() person: IPerson;

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.formatKnownForValues();
  }

  formatKnownForValues(): string {
    return this.person.known_for.map(item => {
      return isMovie(item) ? item.title : item.name;
    }).join(' ,');
  }

  redirect(): void {
    this._router.navigate(['/people', this.person.id]);
  }
}
