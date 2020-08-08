<template>
	<div class="sidebar-menu-item">
		<a @click="openSidebarSumMenu">
			<slot v-if="$slots.icon"
			      name="icon"
			></slot>
			<i v-if="!$slots.icon && icon"
			   :class="icon">
			</i>
			<span>
				{{ title }}
			</span>
		</a>
		<div v-if="$slots.default"
		     class="sidebar-menu-submenu"
		     :class="[
		     	{
					'show': isOpen
		        },
		        submenuSize
		     ]"
		>
			<div class="sidebar-menu-submenu-header">
				<h4>
					{{ title }}
				</h4>
				<button class="close"
				        @click="closeSidebarSumMenu"
				></button>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sidebar-menu-item",
		props: {
			title: {
				type: String,
				required: true
			},
			icon: {
				type: String,
				default: null
			},
			href: {
				type: String,
				default: null
			},
			to: {
				type: String,
				default: null
			},
			submenuSize: {
				type: String,
				default: "small",
				validator: function(value) {
					return ["small", "medium", "full-screen"].indexOf(value) !== -1;
				}
			}
		},
		data: function(){
			return {
				isOpen: false
			};
		},
		methods: {
			openSidebarSumMenu: function(){
				const _parent = this;
				if(_parent.to) {
					_parent.$router.push(_parent.to);
				}else {
					if(_parent.href) {
						window.location.href = _parent.href;
					}else {
						_parent.$emit("closeSidebar");
						setTimeout(function(){
							_parent.isOpen = !_parent.isOpen;
						}, 500);
					}
				}
			},
			closeSidebarSumMenu: function(){
				this.isOpen = false;
			}
		}
	};
</script>