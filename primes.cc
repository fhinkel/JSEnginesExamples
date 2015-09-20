// g++ primes.cc -o primes -O3
// time ./primes

#include <stdio.h>

class Primes {
 public:
  Primes() { counter = 0; }
  int getCounter() const { return counter; }
  int getPrime(int i) const { return primes[i]; }
  void push(int i) { primes[counter++] = i; }

  bool isPrime(int n) {
    for (int i = 1; i < counter; ++i) {
      if ((n % primes[i]) == 0) return true;
    }
    return false;
  }

 private:
  int counter;
  int primes[25000];
};

int main() {
  Primes p;
  int c = 1;
  while (p.getCounter() < 25000) {
    if (!p.isPrime(c)) {
      p.push(c);
    }
    c++;
  }
  printf("%d\n", p.getPrime(p.getCounter()-1));
}
