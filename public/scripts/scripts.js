'use strict'

const dropdown = document.getElementById("day");
const startDate = document.getElementById("start_date");
const endDate = document.getElementById("end_date");

startItinerary.addEventListener("click", function () {

    const diffTime = Math.abs(new Date(endDate.value) - new Date(startDate.value));
    const diffDays = Math.ceil(diffTime / (24 * 3600 * 1000));


    for (let day = 1; day <= diffDays; day++) {
        const dropOption = document.createElement("option");
        dropOption.innerText = day;
        dropdown.appendChild(dropOption);
    }
});


