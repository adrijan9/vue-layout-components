import StringToWords from "./StringToWords";

/**
 * Convert string to camelCase
 *
 * @param str
 * @return {string|null}
 */
export default function (str) {
	const words = StringToWords(str);

	if (!words.length) {
		return null;
	}

	let stringResult = "";
	if (words.length > 0) {
		for(let i = 0 , len = words.length; i < len; i++) {
			let currentStr = words[i],
				tempStr = currentStr.toLowerCase();

			if(i !== 0) {
				// convert first letter to upper case
				tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
			}

			stringResult +=tempStr;
		}
	}

	return stringResult;
}