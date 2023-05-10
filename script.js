const PI = Math.PI;

let time = document.getElementById("current-time");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
}, 1000);


function berekenOmtrek() {
    var omtr,
        res;
    let res2;
    omtr = Number(document.diametercalc.circlediameter.value);
    res = omtr * PI;
    res2 = omtr * omtr * PI * 0.25;
    document.diametercalc.resultaat2.value = res2;
    document.diametercalc.resultaat.value = res;
}
