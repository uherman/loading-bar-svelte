<script lang="ts">
	let className = '';
	export { className as class };

	export let style: string = '';
	export let height: number = 3;
	export let color: string = 'black';
	export let duration: number = 1.5;
</script>

<div class={`loading-bar ${className}`} style={`--loading-bar-height: ${height}px; ${style}`}>
	<div
		class={`animate-loading absolute left-0 h-full`}
		style="width: 100%; --loading-bar-color: {color}; --loading-bar-duration: {duration}s;"
	></div>
</div>

<style>
	@keyframes slide {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	.animate-loading {
		animation: slide var(--loading-bar-duration) infinite linear;
	}
	.loading-bar {
		overflow: hidden;
		position: relative;
		height: var(--loading-bar-height);
		width: 100%;
		border-radius: 0.375rem;
		background-color: #f3f3f3;
	}
	.loading-bar div {
		position: absolute;
		left: 0;
		height: 100%;
		background-color: var(--loading-bar-color);
		width: 100%;
	}
</style>
