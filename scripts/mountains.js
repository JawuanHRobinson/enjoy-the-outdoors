"use strict"

window.onload = function (_event) {
    const mountainSelect = document.getElementById("mountains")
    console.log(mountainSelect)
    mountainSelect.onchange = renderMountainCard



    populateMountains(mountains, mountainSelect)
}

function populateMountains(mountains, mountainSelect) {


    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const currentMountain = mountainsArray[index]

        html += `<option value="${currentMountain.name}">${currentMountain.name}</option>`
    }


    mountainSelect.innerHTML += html

}
function renderMountainCard(event) {
    const selectedMt = event.target.value
    let html = ""
    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountainsMt = mountainsArray[index]
        console.log(mountainsMt)
        if (mountainsMt.name === selectedMt) {
            html += `<div class="card styles width:15rem;">
            <img src="/data/images/${mountainsMt.img}" class="card-img-top"alt="">
            <h5 class="card-header">${mountainsMt.name}</h5>
            <div class="card-body">
                <h5 class="card-title">Elevation: <em>${mountainsMt.elevation}</em></h5>
                <p class="card-text">Difficulty: ${mountainsMt.effort}</p>
                <p class="card-text">Details: ${mountainsMt.desc}</p>
                </div>
            </div>`
                
            

        }


        const outputDiv = document.getElementById("selectedClimb")
        outputDiv.innerHTML = html

    }

}