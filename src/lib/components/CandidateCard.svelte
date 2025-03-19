<script>
    import {page} from "$app/state";
    
    const ITEM_TYPE_ANIME = 1;
    const ITEM_TYPE_CHARACTER = 2;

    /**
     * @type {{
     *  id: number,
     *  itemType: number,
     *  parent?: {
     *   name: string;
     *   nameJapanese?: string | undefined;
     *  } | undefined;
     *  name: string;
     *  nameEnglish?: string | undefined;
     *  nameJapanese?: string | undefined;
     * }}
     */
    const {
        id,
        itemType,
        parent,
        name,
        nameEnglish,
        nameJapanese
    } = $props();
    const rating = page.url.searchParams.get('rating');
    const textColor = rating ? 'text-secondary' : 'text-accent';
    const pageRating = rating ? '&rating=hentai' : '';
</script>

<div class="card card-xl min-w-full max-w-200 bg-base-200 card-border">
    <div class="card-body">
        {#if itemType === ITEM_TYPE_CHARACTER && parent}
            <div class="badge badge-outline badge-info">
                <p>Character キャラクター</p>
            </div>    
            <h3 class="text-base">
                {parent.name} / {parent.nameJapanese ?? ''}
            </h3>
        {:else if itemType === ITEM_TYPE_ANIME}
            <div class="badge badge-outline badge-info">
                <p>Anime アニメ</p>
            </div>
        {/if}
        {#if nameEnglish}
            <h2 class="text-lg">{nameEnglish}</h2>
        {/if}
        {#if nameJapanese}
            <h2 class="text-lg">{nameJapanese}</h2>
        {/if}
        <a href="/item?id={id}&item-type={itemType}{pageRating}">
            <h1 class="card-title {textColor} link link-hover">
                {name}
            </h1>
        </a>
    </div>
</div>