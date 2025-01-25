function addNumbers(a, b)
{
    return a + b;
}
var button = document.querySelector('button');
var input  = document.querySelector('input');
var label  = document.querySelector('p');

// Sieve of Eratosthenes
function SOF(n)
{
    const primes = new Array(n - 1).fill(true);

    for (i = 2; i * i <= n; i++)
    {
        if (primes[i] == true) 
        {
            for (j = i * i; j <= n; j += i)
                primes[j] = false;
        }
    }

    for (let i = 2; i <= n; i++)
    {
        if (primes[i] == true)
            label.textContent += (i + ' ');
    }
}

function SOF_WASM(n)
{
    // TODO.
}



button.addEventListener('click', onClick);

function onClick()
{
    if (input.value === '')
    {
        label.textContent = 'ERROR: Input Empty.';
    }
    else
    {
        label.textContent = '';
    }
    SOF(parseInt(input.value));
}