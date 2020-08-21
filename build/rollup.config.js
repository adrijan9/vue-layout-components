import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify-es";
import minimist from "minimist";
import resolve from "rollup-plugin-node-resolve";

const argv = minimist(process.argv.slice(2));
const extensions = ['.js', '.vue'];

const config = {
	input: "src/main.js",
	output: {
		name: "VueLayoutComponents"
	},
	plugins: [
		resolve(
			{
				mainFields: ['module', 'main', 'jsnext:main', 'browser'],
				extensions
			}
		),
		replace({
			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		commonjs(),
		vue({
			css: true,
			compileTemplate: true,
			template: {
				isProduction: true
			}
		}),
		buble()
	]
};

// Only minify browser (iife) version
if (argv.format === "iife") {
	config.plugins.push(uglify());
}

export default config;