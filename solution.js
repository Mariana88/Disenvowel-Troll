// Your code here
function removeVowels (str){
    let strNoVowels = "";
    let strObject = {};
    const vowels = {
        v1: "a",
        V1: "A",
        v2: "e",
        V2: "E",
        v3: "i",
        V3: "I",
        v4: "o",
        V4: "O",
        v5: "u",
        V5: "U"
    }
    for (let i=0; i<str.length; i++){
        strObject[i] = str[i];
    } 
    for (let x in strObject){
        for (let y in vowels){
            if (strObject[x] == vowels[y]){
                delete strObject[x];
                break;
            }
        }
        if (strObject[x] !== undefined){
            strNoVowels = strNoVowels + strObject[x];
        }      
    }
    return strNoVowels;
}

// Be sure it's the cleanest code you can write!