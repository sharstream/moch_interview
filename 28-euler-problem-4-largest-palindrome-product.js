// Palindrome number reads the same both way. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

const largestPalindromeProduct = digit => {

  const palindrome = num => {
    return parseInt(num.toString().split('').reverse().join('')) === num;
  }

  var start = Math.pow(10, digit - 1),
      end = Math.pow(10, digit);

  var x, y, product, largest = 0,
  productX, productY;
  for (x = start; x < end; x++) {
    for (y = start; y < end; y++) {
      
      product = x * y;

      if (palindrome(product) && largest < product) {
        // if (product > largest) {
        largest = product;
        productX = x;
        productY = y;
        console.log(`largest products between ${productX} * ${productY} is`, product);
        // }
      }
    }
  }

  return largest;

}

console.log(`largest palindrome two 3-digit numbers is: `, largestPalindromeProduct(3));