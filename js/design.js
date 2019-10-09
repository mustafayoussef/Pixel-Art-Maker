let btn =document.querySelector("#btnSubmit");
let table =document.querySelector("#tableID");
// create choice
btn.addEventListener("click",function(e){
    table.innerHTML="";
    let rows =document.getElementById("heightInput").value;
    let cols =document.getElementById("widthInput").value;
    let tableContainer ='';
    for(let i = 0; i < rows; i++){
        tableContainer += '<tr>';
        for(let x =0; x < cols; x++ ){
            tableContainer += '<td></td>';
        }
        tableContainer += '</tr>';
    }
    table.innerHTML= tableContainer;
    e.preventDefault();
    colorTD();
})
// color selected
function colorTD(){
    let tds = document.getElementsByTagName('td');    
    for (let i = 0; i<tds.length; i++){
        tds[i].addEventListener('click', function(ev){
            let currentTD = ev.target;
            let colorSelected =document.getElementById("colorSel").value;
            currentTD.style.backgroundColor=colorSelected;
    })
 }
}
colorTD();