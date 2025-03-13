<script>
    /**
     * @type {{
     *  url: string;
     *  parent?: {
     *   name: string;
     *   nameJapanese?: string | undefined;
     *  } | undefined;
     *  name: string;
     *  nameEnglish?: string | undefined;
     *  nameJapanese?: string | undefined;
     * }}
     */
    let {
        url,
        parent,
        name,
        nameEnglish,
        nameJapanese
    } = $props();
</script>

<div class="card card-xl min-w-full max-w-200 bg-base-200 card-border">
    <div class="card-body">
        {#if parent}
            <span class="badge badge-accent">
                <h3 class="text-base">Character キャラクター</h3>
            </span>    
            <div class="card info">
                <h3 class="text-sm">
                    {parent.name} {parent.nameJapanese ? parent.nameJapanese : ''}
                </h3>
            </div>
        {:else}
            <span class="badge badge-accent">
                <h3 class="text-base">Anime アニメ</h3>
            </span>
        {/if}
        <h1 class="card-title">{name}</h1>
        {#if nameJapanese}
            <h1 class="card-title text-info">{nameJapanese}</h1>
        {/if}
        {#if nameEnglish}
            <h3 class="text-lg">{nameEnglish}</h3>
        {/if}
        <a href="{url}" class="link link-primary">MyAnimeList</a>
    </div>
</div>