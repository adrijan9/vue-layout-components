/**
 * First letter convert to uppercase
 *
 * @param str
 * @return {string}
 */
export default function (str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}