// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }
// for ( let i =100; i >= 0; i--) {
//     console.log(i);
// }

// for ( let i = 0; i <= 100; i++) {
//       console.log(i, i%4);  
// }

// for ( let i = 0; i <= 100; i++) {
//     if (i%4===3){
//       console.log(i, i%4);  
//     }
// }

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     i++
// } while (i > 100)

// let num = parseInt(prompt('Please enter a number'));
// while (Number.isNaN(num)) {
//     alert('Please enter a number');
//     num = parseInt(prompt('Please enter a number'));
// }

// let num;
// do {
//     num = parseInt(prompt('Please enter a number'));
// } while (Number.isNaN(num))

// let avengers = ['Captain America','Black Widow','Hawkeye'];
// avengers.push('Tor');
// avengers.push('Iron Man');
// avengers.push('Spider Man');
// avengers.push('Hulk');

// console.log (avengers[0]);
// console.log(avengers.length);

// for (let i = 0; i < avengers.length; i++) {
//     console.log (i, avengers[i]);
// }

// avengers.forEach(printEl);

// function printEl(el) {
//     console.log (el);
// }

//  avengers.forEach(function( el){
//      console.log(el);
//  });

// avengers.forEach( ( el, idx ) => console.log(idx, el) );



// const nums = [1, 3, 5, 76, 24, 42, 100, 15];
// const nums2 = [10, 30, 50, 760, 240, 420, 1000, 150];
// const nums3 = [12, 32, 52, 762, 242, 422, 1002, 152];

// function doubleArr(arr) {
//     let doubledNums = [];
//     for (let i = 0; i < arr.length; i++) {
//         doubledNums.push(arr[i]*2);
//     }
//     return doubledNums;
// }

// console.log (doubleArr(nums));
// console.log (doubleArr(nums2));
// console.log (doubleArr(nums3));

// let nums = [100, 200, -30, -100, 350, 98, 82, 65, 1100];
// function findMostInt(args) {
//     let maxNum = args[0]; 
//     for (let i = 1; i < args.length; i++) {
//       if (maxNum < args[i]) {
//         maxNum = args[i];
//       }
//     }
//     return maxNum;
// }

// console.log (findMostInt(nums));

// function DNAtoRNA(dna) {
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === 'T') {
//       console.log('found T');
//     dna[i] = 'U';
//     }
//   }
//   return dna;
// }

// console.log(DNAtoRNA('TTTT'))

// let randomBodyParts = ['Nose', 'Fase', 'Hair'];
// let randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
// let randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

// let randomBodyPart = randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
// // let randomInsult = 'Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!';
// let randomInsult = ['Your', randomBodyPart, 'is like a', randomAdjective, randomWord + '!!!' ].join(' ');
// console.log(randomInsult);

// let randomNumbers = [3 ,'is biger than', 2, 'is biger then', 1].join(' ');
// console.log(randomNumbers);

let name = 'Severus';
if (name === 'Ain') {
  console.log('Hello ' + name);
}else if (name === 'Vlad') {
   console.log('Hello ' + name);
 }
 else if (name === 'Severus') {
   console.log('Hello ' + name);
 }
 else {
   console.log('Hello stranger')
 }
