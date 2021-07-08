'use strict'


/* function GetDays() {
    let startdt = new Date(document.getElementById("start_date").value);
    let enddt = new Date(document.getElementById("end_date").value);

    return parseInt((startdt - enddt) / (24 * 3600 * 1000));
}

function cal() {
    let daysnum = Math.abs(GetDays());

    if (document.getElementById("start_date")) {
        document.getElementById("numdays").value = daysnum;
    }
    return daysnum;
}

function daysList() {
    let daysList = [];
    for (let i = 0; i <= (cal() + 1); i++) {
        daysList.push(i);
    }

    return daysList;  
}

function createDaysDrop(daysList) {
    let val = daysList[i];
    let option = document.createElement("option");
    option.innerText = val;
    option.value = val;
    select.AppendChild(option);
}
 */

startItinerary.addEventListener(onclick, function(){
    const start = document.getElementById("start_date").value;
    const end = document.getElementById("end_date").value;
    let options = "";
    for(let day = start; day <=end; day++){
      options += "<option value=" + day + ">" + day + "</option>"
    }
    console.log(options);
    document.getElementById("day").innerText = options;
});

function daysList() {
    let start = document.getElementById("start_date").value;
    let end = document.getElementById("end_date").value;
    let options = "";
    for(let day = start ; day <=end; day++){
      options += "<option value=" + day + ">"+ day +"</option>";
    }
    document.getElementById("day").innerText = options;
}



