// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCG0bTOG-y_YD-NIuwXBVL-W5VgAt6Nbp4",
    authDomain: "ngcore-dashboard.firebaseapp.com",
    databaseURL: "https://ngcore-dashboard.firebaseio.com",
    projectId: "ngcore-dashboard",
    storageBucket: "ngcore-dashboard.appspot.com",
    messagingSenderId: "113682867633"
  }
};
