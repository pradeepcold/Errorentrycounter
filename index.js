// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.innerText = count
    // set countEl's innerText to the count
}

function save() {
    console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}



