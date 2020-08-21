(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('~/src/components/Menu/SidebarMenu')) :
	typeof define === 'function' && define.amd ? define(['~/src/components/Menu/SidebarMenu'], factory) :
	(global = global || self, global.VueLayoutComponents = factory(global.SidebarMenu$1));
}(this, function (SidebarMenu$1) { 'use strict';

	SidebarMenu$1 = SidebarMenu$1 && SidebarMenu$1.hasOwnProperty('default') ? SidebarMenu$1['default'] : SidebarMenu$1;

	function debounce (func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) { func.apply(context, args); }
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) { func.apply(context, args); }
		};
	}

	//

	var script = {
		components: {
			SidebarMenu: SidebarMenu$1
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
			var _parent = this;

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

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	/* server only */
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  } // Vue.extend constructor export interop.


	  var options = typeof script === 'function' ? script.options : script; // render functions

	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true; // functional template

	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  } // scopedId


	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  var hook;

	  if (moduleIdentifier) {
	    // server build
	    hook = function hook(context) {
	      // 2.3 injection
	      context = context || // cached call
	      this.$vnode && this.$vnode.ssrContext || // stateful
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
	      // 2.2 with runInNewContext: true

	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      } // inject component styles


	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      } // register component module identifier for async chunk inference


	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    }; // used by ssr in case component is cached and beforeCreate
	    // never gets called


	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function () {
	      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }

	  if (hook) {
	    if (options.functional) {
	      // register for functional component in vue file
	      var originalRender = options.render;

	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      // inject component registration as beforeCreate hook
	      var existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }

	  return script;
	}

	var normalizeComponent_1 = normalizeComponent;

	/* script */
	var __vue_script__ = script;

	/* template */
	var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout",class:_vm.type},[_c('sidebar-menu',{attrs:{"show":_vm.isSidebarOpen,"logo-url":_vm.sidebarLogoUrl,"logo-image":_vm.sidebarLogoImage}},[_vm._t("sidebar")],2),_vm._v(" "),_c('div',{staticClass:"layout-content"},[_c('div',{staticClass:"layout-header",class:{
					'active': _vm.isSidebarOpen
			     }},[_c('button',{staticClass:"layout-header-toggle",on:{"click":function($event){_vm.isSidebarOpen = !_vm.isSidebarOpen;}}},[_c('span',{attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('div',{staticClass:"layout-header-holder"},[_c('div',{staticClass:"layout-header-left"},[(_vm.$slots.headerLeft)?_vm._t("headerLeft"):_vm._e(),_vm._v(" "),(!_vm.$slots.headerLeft && _vm.title)?_c('h3',{staticClass:"layout-header-title"},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.title)+"\n\t\t\t\t\t")]):_vm._e()],2),_vm._v(" "),(_vm.$slots.headerRight)?_c('div',{staticClass:"layout-header-right"},[_vm._t("headerRight")],2):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"layout-body"},[_vm._t("default")],2)]),_vm._v(" "),(_vm.type === 'basic')?_c('div',{staticClass:"overlay",class:{
				'show': _vm.isSidebarOpen
		     },on:{"click":function($event){_vm.isSidebarOpen = false;}}},[_vm._v("\n\t\t \n\t")]):_vm._e()],1)};
	var __vue_staticRenderFns__ = [];

	  /* style */
	  var __vue_inject_styles__ = undefined;
	  /* scoped */
	  var __vue_scope_id__ = undefined;
	  /* module identifier */
	  var __vue_module_identifier__ = undefined;
	  /* functional template */
	  var __vue_is_functional_template__ = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  

	  
	  var Layout = normalizeComponent_1(
	    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
	    __vue_inject_styles__,
	    __vue_script__,
	    __vue_scope_id__,
	    __vue_is_functional_template__,
	    __vue_module_identifier__,
	    undefined,
	    undefined
	  );

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var script$1 = {
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

	/* script */
	var __vue_script__$1 = script$1;

	/* template */
	var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-menu",class:{
			'show': _vm.show
	     }},[(_vm.logoImage)?_c('a',{staticClass:"logo",attrs:{"href":_vm.logoUrl}},[(_vm.logoImage)?_c('img',{attrs:{"src":_vm.logoImage}}):_vm._e()]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"sidebar-menu-wrapper"},[_vm._t("default")],2)])};
	var __vue_staticRenderFns__$1 = [];

	  /* style */
	  var __vue_inject_styles__$1 = undefined;
	  /* scoped */
	  var __vue_scope_id__$1 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$1 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$1 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  

	  
	  var SidebarMenu = normalizeComponent_1(
	    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
	    __vue_inject_styles__$1,
	    __vue_script__$1,
	    __vue_scope_id__$1,
	    __vue_is_functional_template__$1,
	    __vue_module_identifier__$1,
	    undefined,
	    undefined
	  );

	function uuid () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	//

	var script$2 = {
		name: "sidebar-menu-item",
		uuid: uuid,
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
		computed: {
			isBasicLayout: function(){
				return window.VueLayout._stgs._ltyp === 'basic';
			},
			getSubMenuStyle: function(){
				return this.isBasicLayout ? "" : this.submenuSize;
			}
		},
		methods: {
			openSidebarSumMenu: function(){
				var _parent = this;

				if(_parent.to) {
					_parent.$router.push(_parent.to);
				}else {
					if(_parent.href) {
						window.location.href = _parent.href;
					}else {
						this.closeOtherMenus()
							.then(function () {
								_parent.openCloseSidebar(true);
							});
					}
				}
			},
			closeOtherMenus: function(){
				var _parent = this;
				return new Promise(function (resolve, reject) {
					try {
						if(!_parent.isBasicLayout){
							var menus = document.querySelectorAll(_parent.classes.sidebarSubMenuClass);

							if(menus.length > 0) {
								for(var i = 0; i < menus.length; i++){
									var currentNode = menus[i],
										menuItem = currentNode.parentNode,
										link = menuItem.querySelector(_parent.classes.sidebarMenuItemToggleClass);

									if(currentNode.classList.contains(_parent.classes.sidebarSumMenuShowClass)) {
										currentNode.classList.remove(_parent.classes.sidebarSumMenuShowClass);
										link.classList.remove(_parent.classes.sidebarMenuItemToggleActiveClass);
									}
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
				var menuItem = this.$refs[this.id],
					link = menuItem.querySelector(this.classes.sidebarMenuItemToggleClass),
					submenu = menuItem.querySelector(this.classes.sidebarSubMenuClass);

				if(submenu){
					if(this.isBasicLayout){
						if(!submenu.classList.contains(this.classes.sidebarSumMenuShowClass)) {
							submenu.classList.add(this.classes.sidebarSumMenuShowClass);
							link.classList.add(this.classes.sidebarMenuItemToggleActiveClass);
						}else {
							submenu.classList.remove(this.classes.sidebarSumMenuShowClass);
							link.classList.remove(this.classes.sidebarMenuItemToggleActiveClass);
						}
					} else {
						if(open) {
							submenu.classList.add(this.classes.sidebarSumMenuShowClass);
							link.classList.add(this.classes.sidebarMenuItemToggleActiveClass);
						}else {
							submenu.classList.remove(this.classes.sidebarSumMenuShowClass);
							link.classList.remove(this.classes.sidebarMenuItemToggleActiveClass);
						}
					}
				}
			}
		},
		mounted: function(){
			var _parent = this;

			window.addEventListener("resize", debounce(function(event){
				var sidebarMenu = document.querySelector(_parent.classes.sidebarMenuClass);

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

	/* script */
	var __vue_script__$2 = script$2;

	/* template */
	var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:_vm.id,staticClass:"sidebar-menu-item"},[_c('a',{staticClass:"sidebar-menu-item-toggle",class:{
				'menu': _vm.isBasicLayout && _vm.$slots.default
		   },on:{"click":_vm.openSidebarSumMenu}},[_c('div',{staticClass:"holder"},[(_vm.$slots.icon)?_vm._t("icon"):_vm._e(),_vm._v(" "),(!_vm.$slots.icon && _vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"sidebar-menu-item-title"},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.title)+"\n\t\t\t")])],2),_vm._v(" "),(_vm.isBasicLayout)?_c('span',{staticClass:"arrow"}):_vm._e()]),_vm._v(" "),(_vm.$slots.default)?_c('div',{staticClass:"sidebar-menu-submenu",class:_vm.getSubMenuStyle},[_c('div',{staticClass:"sidebar-menu-submenu-wrapper"},[(!_vm.isBasicLayout)?_c('div',{staticClass:"sidebar-menu-submenu-header"},[_c('h4',[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.title)+"\n\t\t\t\t")]),_vm._v(" "),_c('button',{staticClass:"close",on:{"click":function($event){return _vm.openCloseSidebar(false)}}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"sidebar-menu-submenu-body"},[_vm._t("default")],2)])]):_vm._e()])};
	var __vue_staticRenderFns__$2 = [];

	  /* style */
	  var __vue_inject_styles__$2 = undefined;
	  /* scoped */
	  var __vue_scope_id__$2 = undefined;
	  /* module identifier */
	  var __vue_module_identifier__$2 = undefined;
	  /* functional template */
	  var __vue_is_functional_template__$2 = false;
	  /* style inject */
	  
	  /* style inject SSR */
	  

	  
	  var SidebarMenuItem = normalizeComponent_1(
	    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
	    __vue_inject_styles__$2,
	    __vue_script__$2,
	    __vue_scope_id__$2,
	    __vue_is_functional_template__$2,
	    __vue_module_identifier__$2,
	    undefined,
	    undefined
	  );

	var main = {
	  install: function install(Vue, options) {
	    Vue.component("layout", Layout);
	    Vue.component("sidebar-menu", SidebarMenu);
	    Vue.component("sidebar-menu-item", SidebarMenuItem);
	  }
	};

	return main;

}));
