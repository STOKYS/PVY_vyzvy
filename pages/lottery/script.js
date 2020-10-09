const result = document.getElementById("result");
const resultText = document.getElementById("result").textContent;

document.getElementById("submit").addEventListener("click", lottery);

function lottery() {
    result.innerText = resultText;
    let pocet = document.getElementById("input").value;
    let arr = [];
    if (pocet < 1 || pocet > 30) {
        result.innerHTML += `<mark> Chyba! Zadané číslo musí být v rozmezí od 1 do 30 (Výkon)</mark>`;
    } else {
        for (i = 0; i < pocet; i++) {
            let rand = Math.floor(Math.random() * 50);
            arr.push(rand);
            for (j = 0; j < arr.length; j++) {
                for (k = j + 1; k < arr.length; k++) {
                    if (arr[j] == arr[k]) {
                        arr.splice(arr[arr.length], 1);
                        i--;
                    }
                }
            }
        }
        result.innerHTML += `<mark> ${arr}</mark>`;
    }
}