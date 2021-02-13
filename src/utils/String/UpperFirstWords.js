/**
 * Capitalize all words in string
 *
 * @param string
 * @return {string}
 */
export default function (string) {
	return (string + '')
		.replace(/^(.)|\s+(.)/g, function ($1) {
			return $1.toUpperCase()
		});
}