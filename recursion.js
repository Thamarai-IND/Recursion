// Problem 1

function recursion1(n) {
    if(n<=0) return;
    recursion1(n-1);
    console.log(n);
    recursion1(n-1);
}

recursion1(3);


// Problem 2

function recursion2(n) {

    if(n==0) return 0;

    return 1+recursion2(Math.floor(n/2));
}
const response2 = recursion2(13);
console.log("Recursion 2 Output : ",response2);


// Problem 3
// This is to find binary values for integers
function recursion3(n) {

    if(n==0) return 0;

    recursion3(Math.floor(n/2));
    console.log(n%2);
}
recursion3(16);


// Problem 4

function recursion4(n) {

    if(n==0) return;

    console.log("n value = ",n);
    recursion4(n-1);
}

recursion4(10);


// Problem 5

function recursion5(n) {
    if(n==0) return;
    recursion5(n-1);
    console.log("output : ",n)
}

recursion5(10);


