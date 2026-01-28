// To avoid store values for this tail end recursion by using this method

function basicRecursion(n,k) {
    if(k > n) return;
    console.log("k value : ",k)
    basicRecursion(n,k+1);
}
basicRecursion(3,1);
// Normal Recursion Will store the value inside stack - Not Tail end Recursion
// Method 1

function recursion4(n) {

    if(n==0) return;

    console.log(n);
    recursion4(n-1); // Normally recursion will store the value in Stack, Here console.log(n) printing for each recursion call before calling, so there is no point to store the values in Stack.
}

recursion4(10);

// Method 2

function recursion(n) {

    if(n==0) return;

    recursion4(n-1); // For this method console statement executing after the full recursion call completion, it is store each recursion call values in Stack, then emitting the output values from stack to console statement.
    console.log(n);
}

recursion4(10);


// To avoid store values for this tail end recursion by using this method


function recursive(n) {

    while(n>0) {
        console.log(n);
        n = n - 1;
    }
}

recursive(5);


