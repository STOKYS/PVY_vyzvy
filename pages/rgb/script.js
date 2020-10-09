const output = document.getElementById("output")
const outputText = output.textContent

document.getElementById("submit").addEventListener("click", names)

function names() {
    output.innerText = outputText
    let valueR = document.getElementById("inputR").value
    let valueG = document.getElementById("inputG").value
    let valueB = document.getElementById("inputB").value
    let valueHex = "#"
    arrVal = []
    arr = []
    arr.push(valueR, valueG, valueB)
    for (i = 0; i < 3; i++) {
        if (arr[i] < 0 || arr[i] > 255) {
            output.innerHTML += `<mark> ${arr[i]} není v platném rozsahu od 0 až do 255</mark>`
        } else {
            arrVal[0] = Math.floor(arr[i] / 16)
            arrVal[1] = (arr[i] % 16)
            for (j = 0; j < 2; j++) {
                switch (arrVal[j]) {
                    default:
                        arrVal[j]
                        break
                    case 10:
                        arrVal[j] = "A"
                        break
                    case 11:
                        arrVal[j] = "B"
                        break
                    case 12:
                        arrVal[j] = "C"
                        break
                    case 13:
                        arrVal[j] = "D"
                        break
                    case 14:
                        arrVal[j] = "E"
                        break
                    case 15:
                        arrVal[j] = "F"
                        break
                }
                valueHex += `${arrVal[j]}`
            }
        }
    }
    output.innerHTML += ` <mark>${valueHex}</mark>`
    document.getElementById("example").style.backgroundColor = valueHex
    document.getElementById("exampleText").style.color = valueHex
}