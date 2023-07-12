var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// Log out the programmingLanguages array.
console.log(programmingLanguages);
/* (11) ["Scala", "Java", "Go", "Swift", "Cobol", 
"JavaScript", "Python", "Ruby", "Elm", "Rust", "C#"]
 */

// Use a for...of loop. Inside the loop body, log out a string.
for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

// Use forEach, make all items upper case.
// Log out a list with the index starting at 1.
programmingLanguages.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`.toUpperCase());
});

// Use .filter () to return a new array, only with languages with the letter y.
var updatedLanguages = programmingLanguages.filter(function (item) {
  return item.includes("y");
});

console.log(updatedLanguages);
// (2) ["Python", "Ruby"]
