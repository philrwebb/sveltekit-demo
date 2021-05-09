<script>
    import { createEventDispatcher } from "svelte";
    export let name;
    export let component;
    $: type = name.slice(name.lastIndexOf(".") + 1);
    const dispatch = createEventDispatcher();
    function sendMessage() {
        dispatch("fileSelected", {
            fileName: name,
            component,
        });
    }
</script>

<div
    on:click|self={sendMessage}
    style="background-image: url(https://svelte.dev/tutorial/icons/{type}.svg)"
>
    {name}
</div>

<style>
    div {
        padding: 0 0 0 1.5em;
        background: 0 0.1em no-repeat;
        background-size: 1em 1em;
    }
</style>
