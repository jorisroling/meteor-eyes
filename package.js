Package.describe({
  name: 'jorisroling:eyes',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '<i class="fa fa-eye"></i>',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jorisroling/meteor-eyes',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('eyes.js');
  api.addFiles('eyes_server.js', 'server');
  api.addFiles('eyes_client.js', 'client');
  api.use(['templating', 'spacebars', 'ui'], 'client');
  api.export('Eyes');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jorisroling:eyes');
  api.addFiles('eyes-tests.js');
});
