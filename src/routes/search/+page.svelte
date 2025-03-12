<script>
    let {data} = $props();
</script>

{#await data.candidatesStream}
    loading
{:then candidates} 
    {#each candidates as candidate}
        {candidate}
    {/each}
{:catch error}
    {error}
{/await}