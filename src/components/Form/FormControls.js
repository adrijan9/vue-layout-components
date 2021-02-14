export default {
	props: {
		value: {},
		input: {},
		name: {
			type: String,
			default: "name"
		}
	},
	computed: {
		getAttributes() {
			return {
				...this.$attrs,
				...this.$props
			};
		}
	},
	methods: {
		inputEvent (event) {
			this.update(event.target.value.trim());
		},
		update: function (value) {
			this.$emit("input", value);
			this.$emit("update", value, this.name);
		}
	}
};