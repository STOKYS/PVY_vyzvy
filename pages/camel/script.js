const output = document.getElementById("output");
const outputText = document.getElementById("output").textContent;

document.getElementById("submit").addEventListener("click", camel);

function camel() {
    output.innerText = outputText;
    let inputedText = document.getElementById("input").value;
    let arr = [];
    let nextCap = false;
    if (inputedText.charCodeAt(0) > 47 && inputedText.charCodeAt(0) < 58) {
        output.innerText += `Chyba! Literál proměnné nesmí začínat číslem!`;
    } else {
        for (i = 0; i < inputedText.length; i++) {
            if (inputedText.charCodeAt(i) == 32 && arr.length > 0) {
                nextCap = true;
            } else if ((inputedText.charCodeAt(i) > 64 && inputedText.charCodeAt(i) < 96) || (inputedText.charCodeAt(i) > 96 && inputedText.charCodeAt(i) < 123) || (inputedText.charCodeAt(i) > 47 && inputedText.charCodeAt(i) < 58)) {
                if (nextCap === true) {
                    arr.push((inputedText[i]).toUpperCase());
                } else {
                    arr.push((inputedText[i]).toLowerCase());
                }
                nextCap = false;
            }
        }
        for (j = 0; j < arr.length; j++) {
            output.innerHTML += `${arr[j]}`;
        }
    }
}