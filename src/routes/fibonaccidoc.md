# Computing Fibonacci Numbers

This is the Fibonacci sequence:

1, 1, 2, 3, 5, 8, 13, 21, . . .

The first Fibonacci number is defined as 1. Subsequent Fibonacci numbers are defined as the sum of the preceding 2. So that the 2nd Fibonacci number is also 1 (1 + 0); the 3rd Fibonacci number is 2 (1 + 1); the 4th is 3 (2 + 1); the 5th is 5 (3 + 2); and so on.

The requirement is to write a function to calculate the nth Fibonacci number. One approach is often seen in recursive solutions such as the following javascript:

const fibrecursive = (n) = < {

if (n < 2) return 1;

return fibrecursive(n-1) + fibrecursive(n-2);

}

However, for any reasonably large (\&gt;40) n, this starts taking a really long time. The algorithm can be improved using a technique known as memoization – but ultimately this either consumes all machine memory or blows the stack for larger n.

My goal here is to calculate the nth Fibonacci number where n is very large – say over 1,000,000. I would also like to print out all the significant digits of this number - enter the Javascript BigInt type. Both node and the Chrome javascript implementation support BigInt providing arbitrarily large integers.

Recursion is not strictly necessary to solve this problem efficiently. My first attempt was to use Dynamic Programming and memoisation without recursive calls:

const fibMemo = (n) =\&gt; {

//initialise and array with a single BigInt of 0;

let fib = [BigInt(0)];

let f = 0;

for(let k = 1; k \&lt;= n; k++) {

if (k \&lt; 2) {

f = 1;

} else {

f = BigInt(fib[k-1] + BigInt(fib[k-2]);

}

fib.push(f);

}

return fib(n);

}

This still consumes memory like it was going out of fashion. Remembering all those BigInt values in the array was the problem. Then realised only ever really needed the last two entries in the array to calculate the next fib number. So after the line:

f = BigInt(fib[k-1] + Bigint(fib[k-2]);

I added:

if (k\&gt;=4) fib[k-3] = 0;

This was much more efficient and managed to calculate fib 1,000,000 in a reasonable time and without using excess memory.

After looking at some other implementations of a fib calculator, I realised that I didn&#39;t even need the array! Just needed to &#39;remember&#39; the last two fib numbers leading to:

const fib = (n) =\&gt; {

if (n \&lt; 2) return 1;

let n\_1 = 1;

let n\_2 = 1;

for (let i = 2; i \&lt;= n; i += 1) {

let n\_new = BigInt(n\_1) + BigInt(n\_2);

n\_1 = n\_2;

n\_2 = n\_new;

}

return n\_2;

}

This calculates the 2,000,000th Fibonacci number in a couple of minutes (on my M1 MacBook Pro). The number calculated has a length of 417975 digits!

You can play with this by opening Chrome Developer Tools and in the Console paste the fib function from above.

![](RackMultipart20210407-4-1azjwsa_html_2fd98fc679f8dc7d.png)

On hitting enter you will get an undefined message but you can then type in fib(200000) to get the 200,000th Fibonacci Number and so on. You could even try the fibrecursive function but be careful – it takes several minutes just to calculate fib(50).

Here is the Python version – note python3 treats all integers as &#39;long&#39; (i.e., big intergers):

def fib(n):

if n \&lt; 2:

return 1

n\_1 = 1

n\_2 = 1

for i in range(n+1):

n\_new = n\_1 + n\_2

n\_1 = n\_2

n\_2 = n\_new

return n\_2

You will need a version of python installed to run this but the fact that out of the box Python supports very large integers makes it worthwhile.

## Further Playing

### Fibonacci numbers and the Golden Ratio (phi)

The Golden Ratio or phi is approximated as 1.618033988749895. The value of:

fib(n+1)/fib(n)

approaches phi as n increases. There are a couple of ways to calculate phi – the most common being:

(1 + 51/2) / 2

Given you know a Fibonacci number you can calculate its successor by multiplying by phi. When you notice that each subsequent Fibonacci number involves multiplication by phi ( ) you can arrive at a more generalized formula that will generate the nth Fibonacci number without knowing the preceding two.

f(n) = n / 51/2

This method actually provides an estimate which always rounds to the correct Fibonacci number. Unfortunately, it cannot replace the accuracy (significant digits) of the javascript or python iterative functions because it involves floating point arithmetic and its limitations with regards to significant digits.

### Series based on fib(n) % m

One other thing you could try is to produce the series:

fib(n) % m

for different values of m (try 2, 3, 5, 7, 10).

You will find that you get repeating sequences (period differs depending on the m chosen). For example, for an m of 3 (fib(n) % 3) the series becomes:

2 2 1 0 1 1 2 0

Given you have the python fib function defined above then this little program will calculate the sequence for arbitrary Fibonacci numbers and arbitrary modulus.

def fibmod(n, m):

For i in range(n+1):

print(fib(i) % m)

## Conclusion

Algorithms to calculate large Fibonacci numbers range from unworkable to exceedingly simple and fast. One thing is sure this series, embedded as it is in nature provides endless