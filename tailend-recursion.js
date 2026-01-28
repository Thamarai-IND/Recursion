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



// For Merge Sort works using 3 operations:  Division, Recursion, Merge. So it is not considered as Tailend Recursion.
// Q: Can you convert all the functions that are there into tail and recursive ? 
// A: No, Because after recursion call, immediately merge operation going to happen. So merge sort cannot be converted.
// But Converting all the functions into tail end recursion is possible only on Quick Sort.
// In Quick Sort using pivot element(to get the current position, for approaching left part and right part side ), here you can use tailend recursion
// Quick Sort is faster than Merge Sort
// In Tree Traversal InOrder(left,root,right), PreOrder(root,left,right) using tailend recursion but PostOrder(left,rigth,root) is not using tailend recursion.


// tailend recursion - factorial

function factorial(n,k) {
    if( n === 0 | n === 1) return k;
    return factorial(n-1,k * n);
}

const response = factorial(5,1);

console.log("factorial 3 : ",response);

// tailend recursion is always best for better time complexity