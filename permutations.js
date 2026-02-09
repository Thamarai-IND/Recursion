
// find the all the permutations
function permute(str, i=0) {
    let count = 0;
    let n = str.length;
    if( i == n-1 ) {
        console.log(str.join(""));
        return;
    }

    for(let j=i; j<n; j++) {
        [str[i],str[j]] = [str[j],str[i]]; // swap
        permute(str,i+1);
        [str[i],str[j]] = [str[j],str[i]]; // backtrack
    }

}
let str = "ABCD";
permute(str.split(""));

// getting all the combinations into single array of matches we found and found the length of that permutations.
function permute2(str, i = 0, results = []) {
    let n = str.length;
    if (i === n - 1) {
        results.push(str.join(""));  // store the permutation
        return;
    }

    for (let j = i; j < n; j++) {
        [str[i], str[j]] = [str[j], str[i]]; // swap
        permute2(str, i + 1, results);
        [str[i], str[j]] = [str[j], str[i]]; // backtrack
    }
    return results;
}

let str2 = "ABCD";
let permutations = permute2(str.split(""));  // split into characters

// Print all permutations
console.log(permutations);

// Print the count
console.log("Total permutations:", permutations.length);
