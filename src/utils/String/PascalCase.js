import UpperFirst from "./UpperFirst";
import CamelCase from "./CamelCase";

/**
 * Convert string to PascalCase
 *
 * @param value
 * @return {string}
 */
export default function (value) {
	return UpperFirst(CamelCase(value));
}