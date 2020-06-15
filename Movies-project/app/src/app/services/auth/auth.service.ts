import {Injectable, OnDestroy} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {takeUntil} from 'rxjs/operators';
import AuthProvider = firebase.auth.AuthProvider;
import UserCredential = firebase.auth.UserCredential;


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  public userState: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFirestore: AngularFirestore
  ) {
    this._angularFireAuth.authState
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        user => {
          this.userState.next(user);
        }
      );
  }


  loginWithOauth(providerName: string): (Promise<UserCredential> | Promise<void>) {
    return this
      ._angularFireAuth
      .signInWithPopup(
        this.getProvider(providerName)
      )
      .then(response => {
        this.updateUserInfo(response.user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getProvider(providerName: string): AuthProvider {
    switch (providerName) {
      case 'google':
        return new auth.GoogleAuthProvider();
    }
  }

  logOut(): void {
    this._angularFireAuth
      .signOut()
      .then(() => console.log('Logged Out successfully'))
      .catch(error => console.error(error));
  }

  loginWithEmailAndPassword(credentials: { email: string, password: string }, callback: (error?: any) => void)
    : (Promise<UserCredential> | Promise<void>) {
    return this
      ._angularFireAuth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        this.updateUserInfo(response.user);
        callback();
        console.log(response);
      })
      .catch(error => {
        callback(error);
      });
  }

  registerWithEmailAndPassword(credentials: { email: string, password: string }, callback: (error?: any) => void)
    : (Promise<UserCredential> | Promise<void>) {
    return this
      ._angularFireAuth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        this.updateUserInfo(response.user);
        callback();
        console.log(response);
      })
      .catch(error => {
        callback(error);
      });
  }

  private getUserByUid(uid: string): Observable<any> {
    return this
      ._angularFirestore
      .doc(`/Users${uid}`)
      .valueChanges();
  }

  private updateUserInfo({uid, displayName, email, photoURL}: firebase.User): Promise<void> {
    return this
      ._angularFirestore
      .doc(`/Users/${uid}`)
      .set({
        uid,
        displayName,
        email,
        photoURL
      }, {merge: true});
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

}
