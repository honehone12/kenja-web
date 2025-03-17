<script>
    import SearchInput from "$lib/components/SearchInput.svelte";
</script>

<div class="hero">
    <div class="hero-content flex-col w-screen max-w-3xl">
        <figure class="mb-10 mt-20">
            <img
                src="KenjaMedium.png"
                alt="Kenja logo with english and japanese kanji"
                class="rounded-xl max-w-2xs" 
            />
        </figure>
        <div class="text-lg text-center mb-10">
            <p>Kenja. A Useless Anime Search Engine.</p>
            <p>賢者。役立たずなアニメのサーチエンジン。</p>
        </div>
        <SearchInput/>
        <div class="mt-100 text-lg text-center">
            <p>
                Kenja is a "Anime Search Engine" being developed by individual.
                You can search anime or character with some keywords.
                It's kind of reverse lookup of anime.
            </p>
            <br>
            <p>
                But actually, I understand data source is still small, 
                and contents are not enough.
                Sometimes works ok, but sometimes not.
            </p>
            <br>
            <p>I belive I'll work on it and it'll be improved. </p>
            <br>
            <p>So, please don't expect so much.</p>
            <p>Thank you for your understanding.</p>
            <p>日本語対応はしてないです。さーせん。(ToT)</p>
        </div>
    </div>
</div>
