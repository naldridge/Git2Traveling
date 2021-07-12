'use strict'



startItinerary.addEventListener("click", function () {
    const dropdown = document.getElementById("day");
    const startDate = document.getElementById("start_date");
    const endDate = document.getElementById("end_date");
    const diffTime = Math.abs(new Date(endDate.value) - new Date(startDate.value));
    const diffDays = Math.ceil(diffTime / (24 * 3600 * 1000));


    for (let day = 1; day <= diffDays; day++) {
        const dropOption = document.createElement("option");
        dropOption.innerText = day;
        dropdown.appendChild(dropOption);
    }
});

itinerarySave.addEventListener("click", function () {
    const dateList = document.getElementById("dateList");
    const li = document.createElement("li");
    const daySelect = document.getElementById("day");

    li.innerText = "Day " + daySelect.value;
    dateList.appendChild(li);
})


