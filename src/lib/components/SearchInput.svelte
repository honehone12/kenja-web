<script>
    let isHentai = $state(false);
    let toggleText = $derived(isHentai ? 'Hentai' : 'Normal');
    let toggleColor = $derived(isHentai ? 'secondary' : 'neutral');
</script>

<div class="w-screen max-w-3xl">
    <form method="get" action="search">
        <div class="join w-full">
            <label 
                for="keyword" 
                class="join-item input input-lg grow"
            >
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input 
                    type="text"
                    name="keyword" 
                    required
                    maxlength="50"
                    placeholder="Enter Keywords"
                    id="keyword"
                > 
            </label>
            <button
                type="submit" 
                class="join-item btn btn-lg"
            >
                Search
            </button>
        </div>
        <div class="mt-10 ml-5">
            <label for="rating">
                <span class="font-mono text-lg text-{toggleColor} mr-2">
                    {toggleText}
                </span>
                <input 
                    type="checkbox" 
                    name="rating"
                    value="hentai"
                    id="rating"
                    class="toggle toggle-secondary"
                    bind:checked={isHentai}
                />
            </label>
        </div>
    </form>
    <div class="mt-5 ml-5">
        {#if isHentai}
            <div class="badge badge-dash badge-secondary text-sm">
                <p>I am over 18 years old.</p>
            </div>
            <div class="badge badge-dash badge-secondary text-sm">
                <p>私は１８歳以上です。</p>
            </div>
        {:else}
            <div class="badge badge-dash badge-accent text-sm">
                All Ages
            </div>
        {/if}
    </div>
</div>