<script>

</script>

<form method="get" action="search">
    <div>
        <label for="rating">
            <span class="text-xl">Include Hentai</span>
            <input 
                type="checkbox" 
                name="rating"
                value="hentai"
                id="rating"
                class="toggle toggle-secondary" 
            />
        </label>
    </div>
    
    <div class="join">
        <label for="keyword" class="join">
            <input 
                type="text"
                name="keyword" 
                required
                placeholder="Enter keywords"
                id="keyword"
                class="input input-xl"
            > 
        </label>
        <button
            type="submit" 
            class="btn btn-xl join-item"
        >
            Search
        </button>
    </div>

</form>


