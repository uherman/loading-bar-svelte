import type { PageServerLoad } from './$types.js';
export const load: PageServerLoad = async () => {
	const code = `<script lang="ts">
    import { LoadingBar } from 'loading-bar-svelte';
</script>

<LoadingBar />`;
	return { code };
};
