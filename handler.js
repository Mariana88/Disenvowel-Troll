let disemvowelHandler = function(){
    let str = document.getElementById('str').value;
    let strNoVowels = removeVowels(str);
    let display = document.getElementById('strNoVowels');
    display.value = strNoVowels;
}

let disemvowel = document.getElementById("BTdisemvowel");
disemvowel.addEventListener ("click", disemvowelHandler);