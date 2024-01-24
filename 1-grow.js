// Coding challenge 2024
// 1/366
// url: https://www.codewars.com/kata/57f780909f7e8e3183000078

// REGULAR FUNCTION
/*
function grow(x) {
	let result = x[0];
	for (let i = 1; i < x.length; i++) {
		result *= x[i];
	}
	return result;
}
*/

// HIGHER ORDER FUNCTION 'reduce' (Function Declaration)
/*
function grow(x) {
	const result = x.reduce(
		(accumulator, currentValue) => accumulator * currentValue,
		1
	);
	return result;
}
*/

// ONE LINER STYLE (Function Expression)
const grow = (x) =>
	x.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(grow([2, 2, 2, 2, 2, 2]));
