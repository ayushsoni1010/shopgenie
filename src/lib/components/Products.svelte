<script>
    export let name;
    export let rating;
    export let desc;
    export let price;
    export let img;
</script>

<main class="w-[100%] h-[800px] flex flex-wrap">
    <div class="w-[30%] h-[80%] border border-black m-auto rounded-lg p-10">
        <div>
            <img src={img} alt="" srcset="" class="w-full rounded-lg border" />
        </div>
    </div>
</main>
