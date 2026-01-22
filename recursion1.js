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
console.log("Recursion 2 Output : ",response2)