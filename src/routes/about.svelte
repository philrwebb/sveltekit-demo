<h1>About</h1>
<div class="container">
    <ul>
        <li>
            List 1
        </li>
        <li>
            List 2
        </li>
        <li>
            List 3
        </li>
        <li>
            List 4
        </li>
        <li>
            List 5
        </li>
    </ul>
</div>

<style scoped>
    .container {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    ul{ 
        list-style: none;
        display: grid;
        text-decoration: none;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
</style>