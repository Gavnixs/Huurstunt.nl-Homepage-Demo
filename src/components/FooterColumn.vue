<template>
	<!-- Footer column: shows a title and a vertical list of links -->
	<div class="">
		<h4 class="font-semibold mb-4">{{ title }}</h4>
		<ul class="flex flex-col gap-2 text-primary-300">
			<!-- Render each link passed in via the links prop -->
			<li v-for="link in links" :key="link.name">
				<a :href="link.href" class="hover:text-accent-500 transition-colors">
					{{ link.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true
	},
	links: {
		type: Array,
		required: true
	}
})
</script>