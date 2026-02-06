function generateSubsets(str, current="",i=0) {
    if(i == str.length) {
        console.log(current);
        return;
    }
    generateSubsets(str, current, i+1);
    generateSubsets(str, current+str[i],i+1);
}

generateSubsets("ABC")