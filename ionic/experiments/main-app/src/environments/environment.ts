// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDcwNz73HEFTWfBMcIjArRYj8YwzWuS0aU',
    authDomain: 'orange-ey-gds.firebaseapp.com',
    databaseURL: 'https://orange-ey-gds-default-rtdb.firebaseio.com',
    projectId: 'orange-ey-gds',
    storageBucket: 'orange-ey-gds.appspot.com',
    messagingSenderId: '729866331218',
    appId: '1:729866331218:web:f1a626e48bc05432fb6b8b',
  },
  // apiUrl: 'http://localhost:5050/',
  apiUrl: 'http://34.87.56.251:5050/',
  wsEndpoint: 'ws://34.87.56.251:5050/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
