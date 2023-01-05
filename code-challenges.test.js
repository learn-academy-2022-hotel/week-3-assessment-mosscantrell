// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// RED
describe ("fibonacci", () => {
  it ("takes in a number greater than 2", () => {
    expect (fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect (fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// GREEN
// declare a function (fibonacci) that takes in a number greater than two (which represents the number of values in the array) and returns an array of numbers (starting at one) that follow the Fibonacci sequence
// use a for loop to iterate a specified number of times following a specific set of actions
// create an empty array to push (using .push()) each iteration into
// specify that the next number will be the added to the last number (using the index to specify)
// input: a number greater than two 
// output: an array of numbers following the Fibonacci sequence
const fibonacci = (num) => {
  let arr = [1,1]

  for (let i = 1; i < num -1; i++) {
    arr.push(arr[i] + arr[i - 1])
  }

  return arr
}
console.log(fibonacci(fibLength1))
// output: [1, 1, 2, 3, 5, 8]
console.log(fibonacci(fibLength2))
// output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

 // note: I was stuck on this for a long time, overthinking how to incorporate the index, but using help from a classmate I was able to understand this method. I initially was not creating an array to push new numbers into, nor was I even pushing values. Thanks to my peers and the resources I have available, I was able to come to an understanding on how to execute this code.

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// RED
describe("studyTimeArray", () => {
  it("takes in an object and returns an array with the values ordered from least to greatest", () => {
    expect(studyTimeArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(studyTimeArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// GREEN
// Pseudocode:
// declare a function (studyTimeArray) that takes in an object where the key value pairs are numbers, and returns an array with those numbers in order from least to greatest
// use the Object.values() method to access the values within the array and place them in a string
// use the .sort() mutator to sort the array values from least to greatest
// input: an object where the key value pairs are numbers
// output: an array of the numbers from the objext arranged from least to greatest

const studyTimeArray = (obj) => {
  let firstArray = Object.values(obj)

  return firstArray.sort((a,b) => a - b)
}

console.log(studyTimeArray(studyMinutesWeek1))
// output: [15, 15, 20, 30, 30, 60, 90]
console.log(studyTimeArray(studyMinutesWeek2))
// output: [10, 15, 20, 45, 60, 65, 100]

// Note: It was thanks to help from my peers that I was able to figure out the .sort() mutator here. Originally 100 was sorting right after 10, but that was due to my missing the '(a,b) => a - b' function within .sort().

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// RED
describe("arraySum", () => {
  it("takes in an array and returns the accumulating sum, leaving an empty array empty", () => {
    expect(arraySum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(arraySum(accountTransactions2)).toEqual([250, 161, 261, 165])
  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// GREEN
// declare a function (arraySum) that takes in an array of numbers and returns the accumulated sum (meaning that every addition is logged, rather than the total sum of the numbers)
// use the .map() method to iterate over the array and return a new array of numbers after following a provided action
// set sum to initiate at 0 so that it does not add anything to the value at the first index
// input: an array of numbers
// output: a new array of numbers, showing the cumulative sum of the original array

const arraySum = arr => arr.map((sum => value => sum += value)(0))

console.log((arraySum(accountTransactions1)))
// [100, 83, 60, 51]
console.log((arraySum(accountTransactions2)))
// [250, 161, 261, 165]
console.log((arraySum(accountTransactions3)))
// []

// Note: My code was inspired heavily by a tutorial on the internet I found on how to find the cumulative sum of numbers in an array. I was really struggling to figure out how and why this code should work, but after finding information on the web, I understand way more. This code uses the .map() method, but rather than breaking it into multiple lines of code, it is simplified to one. This forgoes the need for curly brackets or a return, and now makes much more sense to me than it did when I was trying to write it as a traditional arrow function.