function jos(n,k) {
    if(n == 1) return 0;

    return (jos(n-1,k)+k)%n;
}
const response = jos(8,3);
console.log("Survival Person is ",response);