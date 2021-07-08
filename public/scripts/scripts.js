'use strict'


function GetDays() {
    let startdt = new Date(document.getElementById("start_date").value);
    let enddt = new Date(document.getElementById("end_date").value);

    return parseInt((startdt - enddt) / (24 * 3600 * 1000));
}

function cal() {
    if (document.getElementById("start_date")) {
        document.getElementById("numdays").value = Math.abs(GetDays());
    }
    console.log(GetDays());
}


