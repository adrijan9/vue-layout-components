import IsString from "./IsString";

/**
 * Export string to words array
 *
 * @param value
 * @return {array}
 */
export default function (value) {
	if (!IsString(value)) {
		throw new Error("Value must be string.");
	}

	return value.match(
		/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
	);
}