<script>
    import { onMount } from "svelte";
    let fibstring1 = "";
    let modstr1 = "";
    let modstr2 = "";
    let fibnumber = 50;
    $: {
        if (fibnumber > 2) {
            fibstring1 = "fib("+fibnumber.toString() + ") = " + fibfn2(fibnumber).toString();
            // modstr1 = fibmod(fibnumber,9);
            // modstr2 = fibmod(fibnumber, 11);
        }
    }
    const fibfnrecursive = (n) => {
        if (n < 2) return 1;
        return BigInt(fibfnrecursive(n - 1)) + BigInt(fibfnrecursive(n - 2));
    };
    const fibfn = (n) => {
        let fib = [BigInt(0)];
        let f = 0;
        for (let k = 1; k <= n; k++) {
            if (k <= 2) {
                f = 1;
            } else {
                f = BigInt(fib[k - 1]) + BigInt(fib[k - 2]);
                if (k >= 4) fib[k - 3] = 0;
            }
            fib.push(f);
        }
        return fib[n];
    };
    const fibfn2 = (n) => {
        if (n < 2) return 1;
        let n_1 = BigInt(1),
            n_2 = BigInt(1);
        for (let i = 2; i <= n; i += 1) {
            let n_new = BigInt(n_1) + BigInt(n_2);
            n_1 = n_2;
            n_2 = n_new;
        }
        return n_2;
    };
    const fibmod = (n, m) => {
        let modstr = "";
        for (let i = 2; i <= n; i++) {
            modstr += (fibfn2(i) % BigInt(m)).toString() + " ";
        }
        return "fib(" + n.toString() + ") mod " + m.toString() + " = " + modstr;
    }
    onMount(() => {
        fibstring1 = "fib("+fibnumber.toString() + ") = " + fibfn2(fibnumber).toString();
        modstr1 = fibmod(fibnumber, 3);
        modstr2 = fibmod(fibnumber, 5);
        // console.log(fibstring1.length);
    });
</script>

<style>
    .fibcontainer {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-left: 10%;
        margin-right: 10%;
        /* gap: 100px;
        border-bottom: 10px; */
    }
    textarea {
        height: 500px;
        border-bottom: 100px;
        padding-bottom: 100px;
    }
</style>

<div class="fibcontainer">
    <p>Fibonacci number: {fibnumber} (<a href="fibonaccidoc">Documentation</a>)</p>
    <input type="number" bind:value={fibnumber} />
    <textarea name="" id="" cols="200" rows="200">{fibstring1}</textarea>
    <!-- <textarea>{modstr1}</textarea>
    <textarea>{modstr2}</textarea> -->
</div>
