// ## **Quick Question #1**
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]); // {1,2,3,4}

// ## **Quick Question #2**
// What does the following code return?
[...new Set("referee")].join(""); // "ref"

// ## **Quick Questions #3**
// What does the Map ***m*** look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// {[1,2,3] : true,[1,2,3] : false}

// ## **hasDuplicate**
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => (new Set(arr).size === arr.length ? false : true);
const hasDuplicate1 = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 3, 2, 1]));
console.log(hasDuplicate([1, 5, -1, 4]));

console.log(hasDuplicate1([1, 3, 2, 1]));
console.log(hasDuplicate1([1, 5, -1, 4]));
// ## **vowelCount**
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  let strMap = new Map();
  for (let chr of str) {
    const chrToLowerCAse = chr.toLowerCase();
    if ("aeoui".includes(chrToLowerCAse)) {
      strMap.has(chr)
        ? strMap.set(chrToLowerCAse, strMap.get(chr) + 1)
        : strMap.set(chrToLowerCAse, 1);
    }
  }
  return strMap;
};

console.log(vowelCount("awesome")); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount("Colt")); // Map { 'o' => 1 }
