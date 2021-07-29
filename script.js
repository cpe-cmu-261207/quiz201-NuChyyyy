const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const myID = author.innerHTML
let toggle = false
const search = document.getElementById("search")
const reset = document.getElementById("reset")
const text = document.getElementById("text")
const oldText = text.innerText

btn_toggle.onclick = () => {
  // your code here
  if(toggle){
    author.innerHTML = myID
    toggle = false
    btn_toggle.innerHTML = "Show Calculation"
  }else{
    author.innerHTML = 630610760 + length.value
    toggle = true
    btn_toggle.innerHTML = "Show Author"
  }
}

search.onclick = () => {
  const word = text.innerText
  const word1 = word.split(" ")
  const arr = word1.map( x => {x.innerText <= length.value})
  console.log(arr)
}

reset.onclick = () => {
  text.innerHTML = oldText
}
// more codes for Search and Reset buttons here
