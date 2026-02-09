// Question 1

function subsetSum(arr,n,sum) {

    if(n == 0) return (sum == 0) ? 1 : 0;

    return subsetSum(arr, n-1, sum) // exclude the last element if it's greater than target
    + subsetSum(arr, n-1, sum - arr[n-1]); // exclude or include the last element
}

console.log(subsetSum([10,20,15,25],4,35))


// Question 2 

function isSubsetSum(arr, n, target) {
    // Base cases
    if (target === 0) return true;
    if (n === 0 && target !== 0) return false;

    // If last element is greater than target, skip it
    if (arr[n - 1] > target) {
        return isSubsetSum(arr, n - 1, target);
    }

    // Include or exclude the last element
    return (
        isSubsetSum(arr, n - 1, target - arr[n - 1]) +
        isSubsetSum(arr, n - 1, target)
    );
}

// Example usage
const arr = [3, 34, 4, 12, 5, 6, 2];
const target = 9;
const n = arr.length;

const result = isSubsetSum(arr, n, target);

if (result) {
    console.log("Found a subset with given sum");
    console.log("We found ",result," subset");
} else {
    console.log("No subset with given sum");
}

// time complexity is O(2^n)
