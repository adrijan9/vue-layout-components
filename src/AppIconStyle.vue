<template>
	<layout title="Dashboard"
	        sidebar-logo-url="/"
	        :sidebar-logo-image="require(`@/assets/images/vuelogo.png`)"
	>
		<template #headerRight>
			Add your components here
		</template>

		<template #sidebar>
			<sidebar-menu-item title="Small"
			                   submenu-size="small"
			>
				<template #icon>
					<img :src="require(`@/assets/images/expand.svg`)" />
				</template>

				<h2>Small sub heading</h2>
			</sidebar-menu-item>
			<sidebar-menu-item title="Medium"
			                   icon="someIcon"
			                   submenu-size="medium"
			>
				<template #icon>
					<img :src="require(`@/assets/images/expand.svg`)" />
				</template>

				<h2>Medium sub heading</h2>
			</sidebar-menu-item>
			<sidebar-menu-item title="Half Screen"
			                   icon="someIcon"
			                   submenu-size="half-screen"
			>
				<template #icon>
					<img :src="require(`@/assets/images/expand.svg`)" />
				</template>

				<h2>Half screen sub heading</h2>
			</sidebar-menu-item>
			<sidebar-menu-item title="Full screen"
			                   icon="someIcon"
			                   submenu-size="full-screen"
			>
				<template #icon>
					<img :src="require(`@/assets/images/expand.svg`)" />
				</template>

				<h2>Full screen sub heading</h2>
			</sidebar-menu-item>
		</template>

		Body filling
	</layout>
</template>

<script>
	import "../dist/vue-layout-components.css";
	import Layout from "./components/Layout";
	import SidebarMenuItem from "./components/Menu/SidebarMenuItem";

	export default {
		name: "app",
		components: {
			Layout,
			SidebarMenuItem
		}
	}
</script>