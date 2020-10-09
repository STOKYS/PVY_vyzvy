const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;

let pointA = new component(200, 350);
let pointB = new component(600, 600);
let pointC = new component(350, 650);

function component(x, y) {
    this.x = x;
    this.y = y;
}

window.addEventListener("load", mainFnc);

function mainFnc() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#0075b9";
    ctx.strokeStyle = "white";
    ctx.fillText("+ A", pointA.x - 5, pointA.y + 8);
    ctx.fillText("+ B", pointB.x - 5, pointB.y + 8);
    ctx.fillText("+ C", pointC.x - 5, pointC.y + 8);
    document.getElementById("output").innerHTML = `<p>Vzdalenost bodů: <mark>${pointDistance(pointA, pointB).toFixed(2)}</mark><br>Souřadnice středu kružnice: <mark>${stred(pointA, pointB)}</mark><br>Je bod C uvnitř kruhu? <mark>${crcl(pointA, pointB, pointC, pointS) ? "Ano" : "Ne"}</mark><br>Je bod C uvnitř obdélníka? <mark>${prsm(pointA, pointB, pointC) ? "Ano" : "Ne"}</mark></p>`;
}

function pointDistance(a, b) {
    let distance = Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
    return distance;
}

function stred(a, b) {
    pointS = new component(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2);
    ctx.fillText("+ S", pointS.x - 5, pointS.y + 8);
    return (pointS.x + " " + pointS.y);
}

function crcl(a, b, c, s){
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, (pointDistance(a, b)) / 2, 0.5, Math.PI * 2 + 0.5, true);
    ctx.stroke();
    if (pointDistance(a, b) > pointDistance(c, s)){
        return true;
    } else {
        return false;
    }
}

function prsm(a, b, c){
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(a.x, b.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(b.x, a.y);
    ctx.lineTo(a.x, a.y);
    ctx.stroke();
    if (c.y > b.y || c.y < a.y || c.x < a.x || c.x > b.x){
        return false;
    } else {
        return true;
    }
}