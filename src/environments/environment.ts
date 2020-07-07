// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebaseConfig = {
    apiKey: 'AIzaSyCi13uiGgGg8w133VFOmDUA7jLLSya55bw',
    authDomain: 'blogeekplatzilarc.firebaseapp.com',
    databaseURL: 'https://blogeekplatzilarc.firebaseio.com',
    projectId: 'blogeekplatzilarc',
    storageBucket: 'blogeekplatzilarc.appspot.com',
    messagingSenderId: '596958338322',
    appId: '1:596958338322:web:2640197f9b5789550ae7cb',
    measurementId: 'G-L0LBB513EH',
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
