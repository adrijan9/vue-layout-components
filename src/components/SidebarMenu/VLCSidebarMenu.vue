<template>
	<div class="sidebar-menu"
	     :class="{
			     'show': show
	     }"
	>
		<a v-if="logoImage"
		   :href="logoUrl"
		   class="logo"
		>
			<img v-if="logoImage"
			     :src="logoImage"
           alt="logo"
			/>
		</a>
		<div class="sidebar-menu-wrapper">
			<slot></slot>
		</div>
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
				default: null
			},
			logoImage: {
				type: String,
				default: null
			}
		}
	};
</script>