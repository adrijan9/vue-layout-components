<template>
	<div class="sidebar-menu"
	     :class="{
			'show': show
	     }"
	>
		<a :href="logoUrl" class="logo">
			<img :src="require(`@/assets/images/vuelogo.png`)" />
		</a>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "sidebar-menu",
		props: {
			show: {
				type: Boolean,
				default: false
			},
			logoUrl: {
				type: String,
				default: "/"
			}
		},
		methods: {
			sidebarNodes: function(){
				let vm = this,
					nodes = [];

				if(this.$slots.default.length > 0){
					nodes = vm.$slots.default.map(node => {
						const title = vm.getNodeProps(node, "title");

					});
				}

				return nodes;
			},
			getNodeProps: function(node, prop) {
				return node.componentOptions.propsData.hasOwnProperty(prop) ? node.componentOptions.propsData[prop] : null;
			}
		},
		mounted: function(){
			this.sidebarNodes();
		}
	};
</script>