// Coding challenge 2024
// 2/366
// url: https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// STANDARD LOOPING
// const reverseSeq = (n) => {
// 	const result = [];
// 	for (let i = n; i >= 1; i--) {
// 		result.push(i);
// 	}
// 	return result;
// };

// console.log(reverseSeq(5));

// SPREAD OPERATOR TECHNIQUE
// TECHNIQUE - 1
// const reverseSeq = (n) => {
// 	return Array(n)
// 		.fill()
// 		.map((wl, i) => i + 1)
// 		.reverse();
// };

// TECHNIQUE - 2
// const reverseSeq = (n) => {
// 	return [...Array(n)].map((el, i) => i + 1).reverse();
// };

// TECHNIQUE - 3
// const reverseSeq = (n) => [...Array(n)].map((el, i) => i + 1).reverse();

// TECHNIQUE - 4
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
