/**
 * https://www.codewars.com/kata/55edaba99da3a9c84000003b
 *
 * Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
 * First argument is an array of numbers and the second is the divisor.
 *
 * Example(Input1, Input2 --> Output)
 *  [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
 */

function divisibleBy(numbers, divisor){

}

const Test = require('@codewars/test-compat');

describe("Sample tests", function() {
  it("should pass sample tests", function() {
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 2), [2,4,6]);
    Test.assertDeepEquals(divisibleBy([1,2,3,4,5,6], 3), [3,6]);
    Test.assertDeepEquals(divisibleBy([0,1,2,3,4,5,6], 4), [0,4]);
    Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    Test.assertDeepEquals(divisibleBy([1,3,5], 2), []);
  })
})