<script>
    let {data} = $props();
</script>

{#await data.stream}
    loading
{:then candidates} 
    {#each candidates as candidate}
        {candidate}
    {/each}
{:catch error}
    {error}
{/await}