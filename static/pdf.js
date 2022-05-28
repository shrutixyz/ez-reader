const stickyHolder = document.querySelector(".stickyHolder")


function loadStickyNotes(){

    let notes = localStorage.getItem('notes')
    let notesObj = JSON.parse(notes)
    console.log(notesObj)
    let content = ""
    stickyHolder.innerHTML = ""
    for(let i=0; i < Object.keys(notesObj).length; i++){
        console.log("here")
        content += `
        <div class="sticky">
        <p class="tooltip">${notesObj[i].split("-")[0]}</p>
        <span class="tooltiptext">${notesObj[i].split("-")[1]}</span>
       </div>
        
        `

    }

    console.log(content)

    stickyHolder.innerHTML = content


}

loadStickyNotes()


function changemode(){

 var status =   document.getElementById('toggle_checkbox');
try{
    var x = localStorage.getItem('pdf-mode').toString();
}
catch{
    localStorage.setItem('pdf-mode', 'dark')
}

console.log(status.chekce)
if(status.checked == true){
    document.getElementById('pdfframe').style.filter = 'invert(1)';
    localStorage.setItem('pdf-mode', 'dark');
}


else{
    document.getElementById('pdfframe').style.filter = 'invert(0)';
    localStorage.setItem('pdf-mode', 'light');
}


console.log(x);
    
}



function showAlert() {
  document.getElementById('dialog').style.display = 'block'
}



function startTimer(){
    // var x = document.getElementById('timerbox');
    // x.style.display = 'none';
    console.log("lmaoo")

    var y = document.getElementById('timer');
    // console.log(document.getElementById('timemins').value)
    // y.setAttribute('data-minutes', parseInt(document.getElementById('timemins').value)) 
    // dataMinutes = 
    
    y.style.display = 'block'
}


function newNote(){
    prompt("Enter page number")
    prompt("Enter note")
}

function checknotes(){
    //clear localstorage
    
}


const stickyButton = document.querySelector(".submit-sticky");
const stickyDiv = document.querySelector(".sticky-parent");
const inputPage = document.querySelector(".input-page");
const inputSticky = document.querySelector(".input-sticky");

const addBtn = document.querySelector(".add-btn")


addBtn.addEventListener('click', e => {
    
    stickyDiv.style.visibility = "visible"

    

})

stickyButton.addEventListener("click", e => {
    stickyDiv.style.visibility = "hidden"
    let sticky = inputSticky.value
    let page = inputPage.value
    let len;

    //save to localstorage
    let notes = localStorage.getItem('notes')
    let notesObj = JSON.parse(notes)
    console.log(notesObj)
    if(!notesObj){
        len = 0
        notesObj = {}
    }else {
        len =  Object.keys(notesObj).length
    }
    
    console.log
    notesObj[len] = page + "-" + sticky
    localStorage.setItem("notes", JSON.stringify(notesObj))

    inputPage.value = ""
    inputSticky.value = ""
    loadStickyNotes()
})