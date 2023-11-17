"use strict"

window.onload = function (_event) {
    const locationSelect = document.getElementById("locations")
    locationSelect.onchange = renderParkCard

    const parkSelect = document.getElementById("parks")
    parkSelect.onchange = renderParkCard



    populateSelect(locationsArray, locationSelect)
    populateSelect(parkTypesArray, parkSelect)
}


function populateSelect(selectOptions, selectElement) {
    let html = ""
    for (let index = 0; index < selectOptions.length; index += 1) {
        const optionName = selectOptions[index]
        html += `<option>${optionName}</option>`
    }
    selectElement.innerHTML += html
}


function renderParkCard(event) {
    const statePark = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        const currentParks = nationalParksArray[index]

        
        const cardHTML = `
                <div class="card">
                    <h5 class="card-header">${currentParks.LocationName}</h5>
                    <div class="card-body">
                        <p class="card-text">Address: ${currentParks.Address}</p>
                        <p class="card-text">City: ${currentParks.City}</p>
                        <p class="card-text">State: ${currentParks.State}</p>
                        <p class="card-text">ZipCode :${currentParks.ZipCode}</p>
                        <p class="card-text">Phone: ${currentParks.Phone}</p>
                        <p class="card-text">Fax: ${currentParks.Fax}</p>
                        <p class="card-text">Visit: ${currentParks.Visit || "<em>[Website unknown.]</em>"}</p>
                        <p class="card-text">Latitude: ${currentParks.Latitude}</p>
                        <p class="card-text">Longitude: ${currentParks.Longitude}</p>
                    </div>
                </div>
            `

        if (currentParks.State === statePark) {
            html += cardHTML
        } else if (currentParks.LocationName.includes(statePark) === true) {
            html += cardHTML
        }
    }

    const resultDiv = document.getElementById("selectedPark")
    resultDiv.innerHTML = html
}




