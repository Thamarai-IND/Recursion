function SumDigits(n) {

    if(n <= 9) return n;

    let ld = n%10;
    n = Math.floor(n/10);
   return SumDigits(n)+ld;
}
const response = SumDigits(12345);
console.log("sum of digits : ",response)
// 2345 = 14

/**
 * sum = 0
 * n = 2345 -> mod = 2345 % 10 = 5; sum = sum + mod; n = 2345/10 = 234
 * n = 234 -> 234 % 10 = 4; 234/10 = 23
 * n = 23 -> 23 % 10 = 3; 23/10 = 2
 * n = 2 -> 2 % 10 = 2; 2/10 = 0
 */