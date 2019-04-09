"use strict";
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

/*function urlArray(items) {
  return items.map(item => "https://example.com/" + item.toLowerCase().split(/\s+/).join("-"));
}*/

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


// Exercise 6.2.1
function incDakota(items) {
  return items.filter(item => item.includes('Dakota'));
}
console.log(incDakota(states));

function incDakota2(items) {
  return items.filter(item => item.split(/\s+/).length === 2);
}
console.log(incDakota2(states));

// Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}
console.log(functionalLengths(states));

// function functionalLengths(elements) {return elements.reduce((lengths, element) => {lengths[element] = element.length;return lengths;}, {});}console.log(functionalLengths(states));


// Functional Multiplication
function functionalMulti(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalMulti(numbers));

// Exercise 6.1.1

function exUrls(elements) {
  return elements.map(element => 'https://example.com/' + urlify(element));
}
console.log(exUrls(states));
