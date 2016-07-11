/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'lodash':                     'node_modules/lodash/lodash.js',
    '@ngrx':                      'node_modules/@ngrx',
    '@ngrx/store':                'node_modules/@ngrx/store/index.js',
    '@ngrx/effects':              'node_modules/@ngrx/effects/index',
    'ngrx-store-logger':          'node_modules/ngrx-store-logger/dist/index.js',
    '@ngrx/effects/testing':      'node_modules/@ngrx/effects/testing'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'lodash':                     { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    '@ngrx' :                     { defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);
