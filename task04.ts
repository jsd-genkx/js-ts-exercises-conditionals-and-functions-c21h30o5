// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = [15, 9, 25];

for (let i=0; i<num.length; i++) {
    if (num[i] % 3 === 0 && num[i] % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num[i] % 3 === 0) {
        console.log("Fizz");
    } else if (num[i] % 5 === 0) {
        console.log("Buzz");
    };
}