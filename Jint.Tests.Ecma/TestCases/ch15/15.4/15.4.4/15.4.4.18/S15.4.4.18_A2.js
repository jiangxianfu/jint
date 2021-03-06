// Copyright 2011 the Sputnik authors.  All rights reserved.
/**
 * array.forEach can be frozen while in progress
 *
 * @path ch15/15.4/15.4.4/15.4.4.18/S15.4.4.18_A2.js
 * @description Freezes array.forEach during a forEach to see if it works
 */

function foo() {
  ['z'].forEach(function(){ Object.freeze(Array.prototype.forEach); });
}
foo();

