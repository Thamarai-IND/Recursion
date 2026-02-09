// this method works for n value is from 0 to n-1
// how to solve when the number in the circle begin with 0?
function jos(n,k) {
    if(n == 1) return 0;

    return (jos(n-1,k)+k)%n;
}
const response = jos(8,3);
console.log("Survival Person is ",response);

// this method works for n value from 1 to n-1
// how to solve when the number in the circle begin with 1?
function jos2(n,k) {
    if(n == 1) return 0;

    return jos(n,k)+2; // calling the method1 - this extended or modified position - after plus we indicating the default position starting point may be 1 or 2
}
const response2 = jos2(8,3);
console.log("Survival Person is ",response2);
