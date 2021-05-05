<script>
	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function sendMessage() {
        console.log('in send message');
        dispatch("fileSelected", {
            fileName: name,
        });
    }
</script>

<div on:click={sendMessage} style="background-image: url(https://svelte.dev/tutorial/icons/{type}.svg)">{name}</div>

<style>
	div {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>