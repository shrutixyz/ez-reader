


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