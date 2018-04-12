// Your code here
function removeVowels (str){
    let strNoVowels = "";
    let strObject = {};
    const vowels = {
        v1: "a",
        v2: "e",
        v3: "i",
        v4: "o",
        v5: "u"
    }
    for (let i=0; i<str.length; i++){
        strObject[i] = str[i];
    } 
    for (let x in strObject){
            if (strObject[x] == vowels.v1 || strObject[x] == vowels.v2 || strObject[x] == vowels.v3 || strObject[x] == vowels.v4 || strObject[x] == vowels.v5){
            } else {
            strNoVowels = strNoVowels + strObject[x];
            }
    }
    return strNoVowels;
}

// Be sure it's the cleanest code you can write!