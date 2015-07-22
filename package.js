/**
 * Created by gqadonis on 7/22/15.
 */
Package.describe({
  name: 'tribemedia:kurento',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tribemedia/tribemedia-telescope-kurento.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  api.use(['telescope:core@0.21.1',
    'yuukan:streamy']);

  api.addFiles([
    'lib/models/calls.js',
    'lib/modules.js',
    'lib/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/user_call.html',
    'lib/client/templates/user_call.js',
    'lib/client/templates/user_list.html',
    'lib/client/templates/user_list.js',
    'lib/client/templates/profile/profile_call_button.html',
    'lib/client/templates/profile/profile_call_button.js'
  ], 'client');

  api.addFiles([
    'lib/server/publications.js'
  ], ['server']);

  api.addFiles([
    "i18n/en.i18n.json"
  ], ["client", "server"]);

  api.export([
    'Calls'
  ]);
});

Npm.depends({"kurento-client": "6.0.0"});
Npm.depends({"kurento-utils": "6.0.0"});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('tribemedia:kurento');
  api.addFiles('kurento-tests.js');
});
