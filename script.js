// exercise 1

const randomNumbers =  [23,1,2,52,5,34,23,6,246,436];
const primes = [];

for(let n = 0; n < randomNumbers.length; n++) {
  const randomNumber = randomNumbers[n];
  
  let flag = true;
  for (let i = 2; i < randomNumber; i++) {
    if (randomNumber % i == 0) {
      flag = false; 
      break;
    }
  }
  if(flag) primes.push(randomNumber);
}

let  primesMin = Math.min(...primes) ;
let primesMax = Math.max(...primes);
console.log(primesMax);
console.log(primesMin);

console.log(primes);

// exercise 2

let secondA = [3444, 45 , 521, 111, 87, 23, 480];
let secondB =[];

for(let n = 0; n < secondA.length; n++) {
    secondA_min = Math.min(...secondA);
    secondA_max = Math.max(...secondA);
}
console.log(secondA.indexOf(secondA_min));
console.log(secondA.indexOf(secondA_max));

for (n = 1; n < secondA.length-2; n++) {
    secondB.push(secondA[n]);
}
console.log(secondB)

// exercise 3

let thirdA = [150, 293, 486, 439, 105, 50, 297]
for(let n = 0; n < secondA.length; n++) {
    thirdA_min = Math.min(...thirdA);
    thirdA_max = Math.max(...thirdA);
}
console.log(thirdA.indexOf(thirdA_min));
console.log(thirdA.indexOf(thirdA_max));

[thirdA[2], thirdA[5]] = [thirdA[5], thirdA[2]];

console.log(thirdA);