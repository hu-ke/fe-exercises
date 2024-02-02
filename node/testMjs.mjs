// node testMjs.mjs --experimental-modules
// Since Node v13.2.0 the experimental flag is no longer required.

// index.js
import { getFullName } from './utils.mjs';
console.log(getFullName('John', 'Doe')); // My fullname is John Doe