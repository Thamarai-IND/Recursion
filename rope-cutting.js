function RopeCutting(n,a,b,c) {
    if(n<0) return -1;
    if(n==0) return 0;
    let res = Math.max(RopeCutting(n-a,a,b,c),RopeCutting(n-b,a,b,c),RopeCutting(n-c,a,b,c));

    if(res==-1) return -1;
    return res+1;
}

const response = RopeCutting(5,2,5,1);
console.log(response)

// RopeCutting(8,5,9,3); [3,5,9,3]=9, [-1,5,9,3]=9, [5,5,9,3]=9