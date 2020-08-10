<template>
	<div class="sidebar-menu-item" :ref="id">
		<a @click="openSidebarSumMenu"
		   class="sidebar-menu-item-toggle"
		>
			<slot v-if="$slots.icon"
			      name="icon"
			></slot>
			<i v-if="!$slots.icon && icon"
			   :class="icon">
			</i>
			<div class="sidebar-menu-item-title">
				{{ title }}
			</div>
		</a>
		<div v-if="$slots.default"
		     class="sidebar-menu-submenu"
		     :class="submenuSize"
		>
			<div class="sidebar-menu-submenu-wrapper">
				<div class="sidebar-menu-submenu-header">
					<h4>
						{{ title }}
					</h4>
					<button class="close"
					        @click="openCloseSidebar(false)"
					></button>
				</div>
				<div class="sidebar-menu-submenu-body">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import uuid from "../../utils/uuid-v4";
	import debounce from "../../utils/debounce";

	export default {
		name: "sidebar-menu-item",
		uuid,
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
					return ["small", "medium", "half-screen", "full-screen"].indexOf(value) !== -1;
				}
			}
		},
		data: function(){
			return {
				id: this.$options.uuid(),
				classes: {
					sidebarMenuClass: ".sidebar-menu",
					sidebarSubMenuClass: ".sidebar-menu-submenu",
					sidebarMenuItemToggleClass: ".sidebar-menu-item-toggle",
					sidebarSumMenuShowClass: "show",
					sidebarMenuItemToggleActiveClass: "active"
				}
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
						this.closeOtherMenus()
							.then(() => {
								_parent.openCloseSidebar(true);
							});
					}
				}
			},
			closeOtherMenus: function(){
				let _parent = this;
				return new Promise((resolve, reject) => {
					try {
						let menus = document.querySelectorAll(_parent.classes.sidebarSubMenuClass);

						if(menus.length > 0) {
							for(let i = 0; i < menus.length; i++){
								let currentNode = menus[i],
									menuItem = currentNode.parentNode,
									link = menuItem.querySelector(_parent.classes.sidebarMenuItemToggleClass);

								if(currentNode.classList.contains(_parent.classes.sidebarSumMenuShowClass)) {
									currentNode.classList.remove(_parent.classes.sidebarSumMenuShowClass);
									link.classList.remove(_parent.classes.sidebarMenuItemToggleActiveClass);
								}
							}
						}

						resolve();
					} catch (error) {
						reject(error);
					}
				});
			},
			openCloseSidebar: function(open){
				let menuItem = this.$refs[this.id],
					link = menuItem.querySelector(this.classes.sidebarMenuItemToggleClass),
					submenu = menuItem.querySelector(this.classes.sidebarSubMenuClass);

				if(open) {
					submenu.classList.add(this.classes.sidebarSumMenuShowClass);
					link.classList.add(this.classes.sidebarMenuItemToggleActiveClass);
				}else {
					submenu.classList.remove(this.classes.sidebarSumMenuShowClass);
					link.classList.remove(this.classes.sidebarMenuItemToggleActiveClass);
				}
			}
		},
		mounted: function(){
			let _parent = this;

			window.addEventListener("resize", debounce(function(event){
				let sidebarMenu = document.querySelector(_parent.classes.sidebarMenuClass);

				if(event.target.innerWidth >= window.VueLayout._stgs._brk) {
					if(sidebarMenu.classList.contains(_parent.classes.sidebarSumMenuShowClass)) {
						sidebarMenu.classList.remove(_parent.classes.sidebarSumMenuShowClass);
					}
				}else {
					_parent.closeOtherMenus();
				}
			}, 500));
			if(window.VueLayout._stgs._esc) {
				window.addEventListener("keyup", function(event){
					_parent.closeOtherMenus();
				});
			}
		}
	};
</script>