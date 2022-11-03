function calcular() {
    let number = document.querySelector("#txtn");
    let tab = document.querySelector("#seltab");
   

    if (number.value.length == 0) {
        alert("Por favor digite um número");
    } else {
        let n = Number(number.value);
        tab.innerHTML = "";

        for (c = 1; c <= 10; c++) {
            tab.innerHTML += `${n} x ${c} = ${c * n} <br>`;
        }
    }

}