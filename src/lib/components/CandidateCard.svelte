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
    let {
        id,
        itemType,
        parent,
        name,
        nameEnglish,
        nameJapanese
    } = $props();
    let badgeColor = page.url.searchParams.get('rating') 
        ? 'badge-secondary' : 'badge-accent';
    let textColor = page.url.searchParams.get('rating')
        ? 'text-secondary' : 'text-accent';
</script>

<div class="card card-xl min-w-full max-w-200 bg-base-200 card-border">
    <div class="card-body">
        {#if itemType === ITEM_TYPE_CHARACTER && parent}
            <div class="badge badge-outline {badgeColor}">
                <p>Character キャラクター</p>
            </div>    
            <h3 class="text-sm">
                {parent.name}/{parent.nameJapanese ?? ''}
            </h3>
        {:else if itemType === ITEM_TYPE_ANIME}
            <div class="badge badge-outline {badgeColor}">
                <p>Anime アニメ</p>
            </div>
        {/if}
        <h1 class="card-title">{name}</h1>
        {#if nameEnglish}
            <h3 class="text-lg">({nameEnglish})</h3>
        {/if}
        {#if nameJapanese}
            <h1 class="card-title {textColor}">{nameJapanese}</h1>
        {/if}
    </div>
</div>