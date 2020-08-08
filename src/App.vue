<template>
	<layout title="Dashboard"
	>
		<template #sidebar>
			<sidebar-menu-item title="Item 1"
			                   icon="someIcon"
			                   submenu-size="full-screen"
			>
				<h2>123</h2>
			</sidebar-menu-item>
			<sidebar-menu-item title="Item 2"
			                   icon="someIcon"
			                   submenu-size="medium"
			>
				<h2>456</h2>
			</sidebar-menu-item>
		</template>
	</layout>
</template>

<script>
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