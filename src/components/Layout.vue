<template>
	<div class="layout"
	     :class="type"
	>
		<sidebar-menu :show="isSidebarOpen"
		              :logo-url="sidebarLogoUrl"
		              :logo-image="sidebarLogoImage"
		>
			<slot name="sidebar"></slot>
		</sidebar-menu>
		<div class="layout-content">
			<div class="layout-header"
			     :class="{
					'active': isSidebarOpen
			     }"
			>
				<button class="layout-header-toggle"
				        @click="isSidebarOpen = !isSidebarOpen"
				>
					<span aria-hidden="true"></span>
				</button>
				<div class="layout-header-holder">
					<div class="layout-header-left">
						<slot name="headerLeft" v-if="$slots.headerLeft"></slot>
						<h3 v-if="!$slots.headerLeft && title"
						    class="layout-header-title"
						>
							<i v-if="icon" :class="icon"></i>
							{{ title }}
						</h3>
					</div>
					<div v-if="$slots.headerRight"
					     class="layout-header-right"
					>
						<slot name="headerRight"></slot>
					</div>
				</div>
			</div>
			<div class="layout-body">
				<slot></slot>
			</div>
		</div>
		<div v-if="type === 'basic'"
		     class="overlay"
		     :class="{
				'show': isSidebarOpen
		     }"
		     @click="isSidebarOpen = false"
		>
			&nbsp;
		</div>
	</div>
</template>

<script>
	import SidebarMenu from "~/src/components/Menu/SidebarMenu";
	import debounce from "../utils/debounce";

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
			},
			sidebarLogoUrl: {
				type: String,
				default: "/"
			},
			sidebarLogoImage: {
				type: String,
				default: null
			},
			closeOnEsc: {
				type: Boolean,
				default: true
			},
			type: {
				type: String,
				default: null,
				validator: function(value) {
					if(value){
						return ["basic"].indexOf(value) !== -1;
					}
					return true;
				}
			}
		},
		data: function(){
			return {
				isSidebarOpen: false
			};
		},
		created: function(){
			let _parent = this;

			window.VueLayout = {
				_stgs: {
					_esc: _parent.closeOnEsc,
					_brk: 992,
					_ltyp: _parent.type
				}
			};

			window.addEventListener("resize", debounce(function(event){
				if(event.target.innerWidth >= window.VueLayout._stgs._brk) {
					_parent.isSidebarOpen = false;
				}
			}, 500));
		}
	};
</script>