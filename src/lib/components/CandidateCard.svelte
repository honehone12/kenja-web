<script>
    const NIL = '(･ε･)';

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
        <h1 class="card-title">
            {name}/{nameJapanese ? nameJapanese : NIL}
        </h1>
    </div>
</div>