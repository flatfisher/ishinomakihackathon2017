// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0

'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;

//API.AI actions
const TV_ON = 'tv.on';
const AC_ON = 'ac.on';
const LIGHT_ON = 'light.on';
const CAT_LIGHT_ON = 'catlight.on';

const TV_OFF = 'tv.off';
const AC_OFF = 'ac.off';
const LIGHT_OFF = 'light.off';
const CAT_LIGHT_OFF = 'catlight.off';

exports.IRKit = (request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  // Fulfill action business logic
  function tv_on_handler (app) {
    console.log('Requested ' + TV_ON);
    app.ask('Your requested turn on tv');
    app.ask('Okay here we go.');
  }

  function ac_on_handler (app) {
    console.log('Requested ' + AC_ON);
    app.ask('Your requested turn on AC');
    app.ask('Okay here we go.');
  }

  function light_on_handler (app) {
    console.log('Requested ' + LIGHT_ON);
    app.ask('Your requested turn on light');
    app.ask('Okay here we go.');
  }

  function cat_light_on_handler (app) {
    console.log('Requested ' + CAT_LIGHT_ON);
    app.ask('Your requested turn on cat light');
    app.ask('Okay here we go.');
  }

  function tv_off_handler (app) {
    console.log('Requested ' + TV_OFF);
    app.ask('Your requested turn off tv');
    app.ask('Okay here we go.');
  }

  function ac_off_handler (app) {
    console.log('Requested ' + AC_OFF);
    app.ask('Your requested turn off AC');
    app.ask('Okay here we go.');
  }

  function light_off_handler (app) {
    console.log('Requested ' + LIGHT_OFF);
    app.ask('Your requested turn off light');
    app.ask('Okay here we go.');
  }

  function cat_light_off_handler (app) {
    console.log('Requested ' + CAT_LIGHT_OFF);
    app.ask('Your requested turn off cat light');
    app.ask('Okay here we go.');
  }

  const actionMap = new Map();
  actionMap.set(TV_ON, tv_on_handler);
  actionMap.set(AC_ON, ac_on_handler);
  actionMap.set(LIGHT_ON, light_on_handler);
  actionMap.set(CAT_LIGHT_ON, cat_light_on_handler);
  actionMap.set(TV_OFF, tv_off_handler);
  actionMap.set(AC_OFF, ac_off_handler);
  actionMap.set(LIGHT_OFF, light_off_handler);
  actionMap.set(CAT_LIGHT_OFF, cat_light_off_handler);
  app.handleRequest(actionMap);
};