<script>
    import CandidateCard from '$lib/components/CandidateCard.svelte';
    import ErrorMessage from '$lib/components/ErrorMessage.svelte';

    let {data} = $props();
</script>

<div class="hero min-h-screen">
    <div>
        {#await data.stream}
            <div class="hero-content">
                <span class="loading loading-dots loading-xl"></span>
            </div>
        {:then candidates}
            <div class="hero-content mt-3">
                <h1 class="text-2xl">{candidates.length} item{candidates.length === 1 ? '' : 's'}</h1>
            </div>
            {#each candidates as c}
                <div class="hero-content">
                    <CandidateCard 
                        id={c.id}
                        itemType={c.itemType}
                        parent={c.parent}
                        name={c.name}
                        nameEnglish={c.nameEnglish}
                        nameJapanese={c.nameJapanese}
                    />
                </div>
            {/each}   
        {:catch}
            <ErrorMessage/>
        {/await}
    </div>
</div>

