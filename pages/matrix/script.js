const output = document.getElementById("output")
const outputText = output.textContent

document.getElementById("submit").addEventListener("click", average)

function average() {
    output.innerText = outputText
    let min = Number(document.getElementById("inputS").value)
    let max = Number(document.getElementById("inputB").value)
    let col = Number(document.getElementById("inputC").value)
    let avrg = 0,
        nofTimes = 0;
    if (col > 8 || col < 1) {
        output.innerHTML += ` <mark>Chyba! Sloupce pouze od 1 do 8</mark>`
    } else {
        for (i = 0; i < 64; i++) {
            rand = Math.floor(Math.random() * (max - min + 1)) + min
            document.getElementsByTagName("TD")[i].innerText = rand
            if (i % 8 == (col - 1)) {
                document.getElementsByTagName("TD")[i].style.backgroundColor = "rgba(0,117,185, 0.5)"
                nofTimes++
                avrg += rand
            } else {
                document.getElementsByTagName("TD")[i].style.backgroundColor = "#242424"
            }
        }
        output.innerHTML += ` <mark>${(avrg / nofTimes).toFixed(3)}</mark>`
    }
}