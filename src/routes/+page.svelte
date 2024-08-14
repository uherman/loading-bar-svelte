<script lang="ts">
	import { LoadingBar } from '../lib/components/loading-bar/index.js';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import shell from 'svelte-highlight/languages/shell';
	import ashes from 'svelte-highlight/styles/grayscale-dark';
	import type { PageData } from './$types.js';
	import { Copy, Check } from 'lucide-svelte';
	export let data: PageData;

	let height = 3;
	let duration = 0.8;
	let color = '#000000';

	let copyBtnNpmHover = false;
	let copyBtnHover = false;

	let copied = false;
	let copiedNpm = false;

	const copy = (value: string) => {
		navigator.clipboard.writeText(value);
		if (value === 'npm i loading-bar-svelte') {
			copiedNpm = true;
		} else {
			copied = true;
		}
		setTimeout(() => {
			copied = false;
			copiedNpm = false;
		}, 1000);
	};
</script>

<svelte:head>
	{@html ashes}
</svelte:head>

<main style="display: flex; flex-direction: column;">
	<LoadingBar {height} {color} {duration} style="max-width:600px;" />
	<div style="display: flex; flex-direction:column;  max-height:400px; ">
		<span style="position: relative;">
			<Highlight language={shell} code={`npm i loading-bar-svelte`} class="codeblock-npm" />
			<button
				class="copy-btn-npm"
				on:mouseenter={() => (copyBtnNpmHover = true)}
				on:mouseleave={() => (copyBtnNpmHover = false)}
				on:click={() => copy('npm i loading-bar-svelte')}
			>
				{#if copiedNpm}
					<Check color="#FFF" style="width: 20px; height: 20px;" />
				{:else}
					<Copy color={copyBtnNpmHover ? '#FFF' : '#747474'} style="width: 20px; height: 20px;" />
				{/if}
			</button>
		</span>
		<span style="position: relative;">
			<Highlight language={typescript} code={data.code} class="codeblock" />
			<button
				class="copy-btn"
				on:mouseenter={() => (copyBtnHover = true)}
				on:mouseleave={() => (copyBtnHover = false)}
				on:click={() => copy(data.code)}
			>
				{#if copied}
					<Check color="#FFF" style="width: 20px; height: 20px;" />
				{:else}
					<Copy color={copyBtnHover ? '#FFF' : '#747474'} style="width: 20px; height: 20px;" />
				{/if}
			</button>
		</span>
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	main div {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	:global(body) {
		margin: 0;
		font-family: 'Lucida Console', 'Courier New', monospace;
		font-weight: 600;
	}

	:global(.codeblock code) {
		border-radius: 0.5rem;
		font-weight: normal;
		padding: 1.5rem !important;
	}
	:global(.codeblock-npm code) {
		border-radius: 0.5rem;
		font-weight: normal;
		padding-right: 2.5rem !important;
	}
	:global(.codeblock) {
		position: relative;
	}
	:global(.codeblock-npm) {
		position: relative;
	}
	.copy-btn {
		position: absolute;
		right: 0.5rem;
		top: 1.3rem;
		background: transparent;
		border: none;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
	}

	.copy-btn-npm {
		position: absolute;
		right: 0.3rem;
		top: 1.2rem;
		bottom: 0;
		background: transparent;
		border: none;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
	}
</style>
