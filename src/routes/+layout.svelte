<script>
	import "../app.css";
	let { children } = $props();
</script>

<div>

</div>
<div>
	{@render children()}
</div>
<div class="mt-20">
	<footer class="footer footer-center bg-neutral text-neutral-content p-10">
		<aside>
			<img
				src="KenjaSmall.png"
				alt="Kenja logo with english and japanese kanji"
				class="rounded-md max-w-20" 
			/>
			<p>Copyright © {new Date().getFullYear()}</p>
			<p>All right reserved by Kenja Developer</p>
		</aside>
	</footer>
</div>
