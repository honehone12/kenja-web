<script>
	import Footer from "$lib/components/layout/Footer.svelte";
	import Navbar from "$lib/components/layout/Navbar.svelte";
	import "../app.css";
	
	let { children } = $props();
</script>

<Navbar/>
<div class="w-full">
	{@render children()}
</div>
<Footer/>
