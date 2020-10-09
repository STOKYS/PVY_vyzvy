const output = document.getElementById("output");
const outputText = output.textContent;

document.getElementById("submit").addEventListener("click", names);

function names() {
    output.innerText = outputText;
    let valueR = document.getElementById("inputR").value;
    let valueG = document.getElementById("inputG").value;
    let valueB = document.getElementById("inputB").value;
    let valueHex = "#";
    let arrVal = [];
    let arr = [];
    arr.push(valueR, valueG, valueB);
    for (i = 0; i < 3; i++) {
        if (arr[i] < 0 || arr[i] > 255) {
            output.innerHTML += `<mark> ${arr[i]} není v platném rozsahu od 0 až do 255</mark>`;
        } else {
            arrVal[0] = Math.floor(arr[i] / 16);
            arrVal[1] = (arr[i] % 16);
            for (j = 0; j < 2; j++) {
                valueHex += `${letter(arrVal[j])}`;
            }
        }
    }
    output.innerHTML += ` <mark>${valueHex}</mark>`;
    document.getElementById("example").style.backgroundColor = valueHex;
    document.getElementById("exampleText").style.color = valueHex;
}

function letter(type) {
    let other = type
    return {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
      }[type] || [other]
}
