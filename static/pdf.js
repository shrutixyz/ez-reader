


function changemode(){

 var status =   document.getElementById('toggle_checkbox');
var x = localStorage.getItem('pdf-mode').toString();

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
    var x = document.getElementById('timerbox');
    x.style.display = 'none';
    console.log("lmaoo")

    var y = document.getElementById('timer');
    console.log(document.getElementById('timemins').value)
    y.setAttribute('data-minutes', parseInt(document.getElementById('timemins').value)) 
    // dataMinutes = 
    
    y.style.display = 'block'
}