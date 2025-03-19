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

