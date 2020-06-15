// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  tmdb: {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'ddd6fab2e5db2a56efc1f866365f656e',
  },
  firebase: {
    apiKey: 'AIzaSyDB984_qEhKY_ZlGHmu5gEnAWfkkKI8S-s',
    authDomain: 'mentormate-movie-database.firebaseapp.com',
    databaseURL: 'https://mentormate-movie-database.firebaseio.com',
    projectId: 'mentormate-movie-database',
    storageBucket: 'mentormate-movie-database.appspot.com',
    messagingSenderId: '265721035619',
    appId: '1:265721035619:web:b7a14c2a36148a87923156',
    measurementId: 'G-YBQ2D35TJJ',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
