import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {IMovie} from '../../Interfaces/movie';
import {ITVSerie} from '../../Interfaces/tvSerie';
import {IFirestoreMedia} from '../../Interfaces/firestore';
import {isMovie} from '../tmdb/constants';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private _httpClient: HttpClient,
    private _authService: AuthService,
    private _angularFireAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore
  ) {
  }

  addMediaToWatchList(media: IMovie | ITVSerie, userId: string, callback: (error?: string) => void): void {
    const mediaDetails: IFirestoreMedia = {
      id: media.id,
      createdAt: new Date(),
      originalTitle: isMovie(media) ? media.title : media.original_name,
      posterPath: media.poster_path,
      isWatched: false,
      mediaType: isMovie(media) ? 'movie' : 'tv-serie'
    };

    this
      ._angularFirestore
      .doc(`Lists/${userId}`)
      .collection<IFirestoreMedia>('watchList')
      .doc<IFirestoreMedia>(`${media.id}`)
      .set(mediaDetails)
      .then(success => callback())
      .catch(error => callback(error));

  }

  addMediaToFavorites(media: IMovie | ITVSerie, userId: string, callback: (error?: string) => void): void {
    const mediaDetails: IFirestoreMedia = {
      id: media.id,
      createdAt: new Date(),
      originalTitle: isMovie(media) ? media.title : media.original_name,
      posterPath: media.poster_path,
      isWatched: false,
      mediaType: isMovie(media) ? 'movie' : 'tv-serie'
    };

    this
      ._angularFirestore
      .doc(`Lists/${userId}`)
      .collection<IFirestoreMedia>('favorites')
      .doc<IFirestoreMedia>(`${media.id}`)
      .set(mediaDetails)
      .then(success => callback())
      .catch(error => callback(error));
  }
}
