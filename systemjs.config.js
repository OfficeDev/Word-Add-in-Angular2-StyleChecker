// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file configures the script loader, SystemJS.
 */
(function (global) {

  // Set aliases for paths
  var map = {
    'app': 'app',
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

    // Add the Angular 2 packages to the packages object.
  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
  ];
  packageNames.forEach(function (pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages,
  };

  System.config(config);

})(this);
