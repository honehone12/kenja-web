<script>
    import SearchInput from "$lib/components/SearchInput.svelte";
</script>

<div class="hero h-screen">
    
    <div class="hero-content flex-col w-screen max-w-3xl">
        <figure class="mb-10">
            <img
                src="KenjaMedium.png"
                alt="Kenja logo with english and japanese kanji"
                class="rounded-xl max-w-xs" 
            />
        </figure>
        <p>Kenja. A Useless Anime Search Engine.</p>
        <p class="mb-10">賢者。役立たずなアニメのサーチエンジン。</p>
        <SearchInput/>
    </div>
</div>
