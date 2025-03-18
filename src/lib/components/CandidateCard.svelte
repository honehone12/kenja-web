<script>
    import {page} from "$app/state";
    
    /**
     * @type {{
     *  id: number,
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
        id,
        parent,
        name,
        nameEnglish,
        nameJapanese
    } = $props();
    let titleColor = page.url.searchParams.get('rating') 
        ? 'secondary' : 'accent';
</script>

<div class="card card-xl min-w-full max-w-200 bg-base-200 card-border">
    <div class="card-body">
        {#if parent}
            <span class="badge badge-outline badge-{titleColor}">
                <h3 class="text-base">Character キャラクター</h3>
            </span>    
            <h3 class="text-sm">
                {parent.name}/{parent.nameJapanese ? parent.nameJapanese : ''}
            </h3>
        {:else}
            <span class="badge badge-outline badge-{titleColor}">
                <h3 class="text-base">Anime アニメ</h3>
            </span>
        {/if}
        <h1 class="card-title">{name}</h1>
        {#if nameEnglish}
            <h3 class="text-lg">({nameEnglish})</h3>
        {/if}
        {#if nameJapanese}
            <h1 class="card-title text-{titleColor}">{nameJapanese}</h1>
        {/if}
    </div>
</div>