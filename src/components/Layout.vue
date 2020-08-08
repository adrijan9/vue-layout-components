<template>
	<div class="layout">
		<sidebar-menu :show="isSidebarOpen">
			<slot name="sidebar"></slot>
		</sidebar-menu>
		<div class="layout-content">
			<div class="layout-header">
				<button class="layout-header-toggle"
				        @click="isSidebarOpen = !isSidebarOpen"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<div class="layout-header-holder">
					<div class="layout-header-left">
						<slot name="headerLeft" v-if="$slots.headerLeft"></slot>
						<h3 v-if="title">
							<i v-if="icon" :class="icon"></i>
							{{ title }}
						</h3>
					</div>
					<div class="layout-header-right">
						<slot name="headerRight" v-if="$slots.headerRight"></slot>
					</div>
				</div>
			</div>
			<div class="layout-body">
				body
			</div>
			<div v-if="$slots.footer"
			     class="layout-footer"
			>
				footer
			</div>
		</div>
	</div>
</template>

<script>
	import "../scss/index.scss";
	import SidebarMenu from "./Menu/SidebarMenu";

	export default {
		components: {
			SidebarMenu
		},
		props: {
			title: {
				type: String,
				default: null
			},
			icon: {
				type: String,
				default: null
			}
		},
		data: function(){
			return {
				isSidebarOpen: false
			};
		},
		methods: {}
	};
</script>