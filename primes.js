//time d8 primes.js 

function Primes() {
  this.counter = 0;
  this.primes = new Array(25000);
  this.getCounter = function() {return this.counter;}
  this.getPrime = function(i) {return this.primes[i];}
  this.push = function(i) {
    this.primes[this.counter++] = i;
  }

  this.isNotPrime = function(n) {
    for (var i = 1; i < this.counter; ++i) {
      if ((n % this.primes[i]) == 0) return true;
    }
    return false;
  }
};

function main() {
  p = new Primes();
  var c = 1;
  while (p.getCounter() < 25000) {
    if (!p.isNotPrime(c)) {
      p.push(c);
    }
    c++;
  }
  print(p.getPrime(p.getCounter()-1));
}

main();

