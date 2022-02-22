<script>
	export let boxstate = {}
</script>
<div class="box" style:background-color="{boxstate.color}" style:border-color="{boxstate.content === "" ? 'lightgrey' : 'black'}">
	<span >{boxstate.content}</span>
</div>
<style>
	.box {
		height: 2rem;
		width: 2rem;
		border: 1px solid lightgrey; 
		display: grid;
		justify-content: center;
		align-content: center;
	}
</style>