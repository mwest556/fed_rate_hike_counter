let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function incrementUp() {
    count += 25
    countEl.textContent = count
}

function incrementDown() {
    count -= 25
    countEl.textContent = count
}

function save() {
    let countStr = count + " BPS / "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0   
}