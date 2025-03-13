<form method="get" action="search">
    <div class="mb-5 ml-5">
        <label for="rating">
            <span class="text-xl">Search For Hentai ??</span>
            <input 
                type="checkbox" 
                name="rating"
                value="hentai"
                id="rating"
                class="toggle toggle-secondary ml-5" 
            />
        </label>
    </div>

    <div class="join w-screen max-w-3xl">
        <label 
            for="keyword" 
            class="join-item input input-xl grow"
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
            class="join-item btn btn-xl"
        >
            Search
        </button>
    </div>
</form>
