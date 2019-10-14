// Violates rule(s): no-var
var dontUseVar = true;

// Violates rule(s): camelcase
const should_use_camel_case = true;

// Violates rule(s): no-undef
undeclaredVariable = true;

// Violates rule(s): curly, no-prototype-builtins
const myObj = {};
if (myObj.hasOwnProperty('No prototype built-ins'))
    // Violates rule(s): no-console
    console.log('No console statement');

// Violates rule(s): multiline-comment-style
// This
// is
// a
// bad
// multiline
// comment

// Violates rule(s): max-len
const longText = 'This line is way too long. This line is way too long. This line is way too long. This line is way too long. This line is way too long. This line is way too long. ';

// Violates rule(s): prefer-const, no-undef-init, no-undefined
let badExplicitUndefinedAndAlsoThisIsALetThatShouldBeAConst = undefined;

// Violates rule(s): no-confusing-arrow
(() => longText.length > 1 ? 'so long' : 'not that long')();
