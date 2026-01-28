function isPalindrome(str,start,end) {

    if(start >= end) return true;
    return (str[start] === str[end]) && isPalindrome(str,start+1,end-1);
}

const response = isPalindrome('malayalam',0,8);
console.log("Give String is Palindrome or Not : ",response);