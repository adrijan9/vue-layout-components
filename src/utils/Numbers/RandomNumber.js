/**
 * Generate random number
 *
 * @param maxRange
 * @param numbersLength
 * @return {any[]}
 */
export default function (maxRange, numbersLength = 1) {
	return [
		...Array(maxRange).keys()
	]
		.sort(() => Math.random() - .5)
		.slice(0, numbersLength);
}