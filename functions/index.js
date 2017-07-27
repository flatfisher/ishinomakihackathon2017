// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0

'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;

//API.AI actions
const SAY_HELLO = 'say.hello';

exports.IRKit = (request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  // Fulfill action business logic
  function helloHandler (app) {
    // Complete your fulfillment logic and send a response
    console.log('Requested ' + SAY_HELLO);
    app.ask('Hello!!');
  }

  const actionMap = new Map();
  actionMap.set(SAY_HELLO, helloHandler);

  app.handleRequest(actionMap);
};