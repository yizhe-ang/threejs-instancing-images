<script>
  import { Canvas } from '@threlte/core';
  import Scene from '../components/Scene.svelte';
</script>

<div class="wrapper">
	<Canvas linear flat>
		<Scene />
	</Canvas>
</div>

<style>
	.wrapper {
		position: fixed;
		inset: 0;
		background-color: #e2e8f0;
	}
</style>
