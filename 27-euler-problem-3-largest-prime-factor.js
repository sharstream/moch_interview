// Euler Problem: #3
// Write a function to find the largest prime facotr of any given number
// For example: The prime factors of 13195 are 5, 7, 13, and 29

const factorsOf = n => {
  var factors = [];
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      factors.push(n/i);
    }
  }
  return factors.sort();
}

const largestPrimeFactor = factors => {
  // TODO
  var primes = [];
  // Go through each factor
  for (let i = 0; i < factors.length; i++) {
    var isPrime = true;
    // Check to see if any other factor divides it
    for (let j = 0; j < factors.length; j++) {
      if (factors[i] % factors[j] === 0 && i !== j) {
        isPrime = false;
      }
    }
    // If no other factor divides it, it must be prime
    if (isPrime) {
      primes.push(factors[i]);
    }
  }


  return primes;// ES6;
  // return Math.max.apply(Math, ...primes)// NodeJS;
}

var result = factorsOf(13195);

console.log(`The prime factors expected of 13195 are: `, factorsOf(13195));
console.log(`The largest prime factor expected of 13195 are: `, Math.max.apply(Math, largestPrimeFactor(result)));