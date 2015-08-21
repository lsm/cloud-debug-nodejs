/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Default configuration
module.exports = {
  enabled: process.env.GCLOUD_DEBUG_ENABLED || false,
  workingDirectory: process.cwd(),
  // Log levels: 0-disabled,1-error,2-warn,3-info,4-debug
  logLevel: process.env.GCLOUD_INSIGHTS_LOGLEVEL || 1,
  // How frequently should the list of breakpoints be refreshed from the
  // cloud debug server
  breakpointUpdateIntervalSec: 10,
  // We expire stale breakpoints on the server.
  breakpointExpirationSec: 60 * 60 * 24, // 24 hours

  capture: {
    // Whether to include details about stack frames belonging to node-core
    includeNodeModules: false,
    // Maximum number of stack frames to capture data for. The limit is aimed
    // to reduce overall capture time
    // TODO: implement this
    //maxFrames: 20,
    // Only collect locals and arguments on a few top frames. For the rest
    // only collect the source location
    // TODO: implement this
    //maxExpandFrames: 5,
    // To reduce the overall capture time, limit the number of properties
    // gathered on large object. A value of 0 disables the limit.
    maxProperties: 0,
    // Total 'size' if data to gather. This is NOT the number of bytes of data
    // that are sent over the wire, but instead a very very coarse approximation
    // based on the length of names and values of the properties. This should
    // be somewhat proportional to the amount of processing needed to capture
    // the data and subsequently the network traffic
    maxDataSize: 20000
    // To limit the size of the buffer, we truncate long strings.
    // A value of 0 disables truncation.
    // TODO: implement
    //maxStringLength: 80
  }

};
