const result = document.getElementById("result")
const resultText = document.getElementById("result").textContent

document.getElementById("submit").addEventListener("click", lottery)

function lottery() {
    result.innerText = resultText
    let pocet = document.getElementById("input").value
    let arr = []
    for (i = 0; i < pocet; i++) {
        rand = Math.floor(Math.random() * 50)
        arr.push(rand)
        for (j = 0; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if (arr[j] == arr[k]) {
                    console.log(arr[j] + "is the same value as " + arr[k] + ", " + arr)
                    arr.splice(arr[arr.length], 1);
                    i--
                    console.log(arr)
                }
            }
        }
    }
    result.innerHTML += `<mark> ${arr}</mark>`
}