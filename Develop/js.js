//retrieve current day
var day =document.getElementById("currentDay")
var actualDay=moment().format("Do MMMM YYYY")
day.textContent=actualDay   


//generate input to insert a new event
$(document).ready(function () {
    $(".add_exp1").click(function(){
        $(".exp").append('<br><br><br>'+
        '<input type="input" style="width: 60%;" class="form-control" id="hour" placeholder="Hour (00:00)">'+
        '<br>'+
        '<input type="input" style="width: 60%;" class="form-control" id="description" placeholder="Description">'+
        '<br><br><br>'+ `<button type="done" id ="donebutton" class="btn btn-primary">Done</button>`);      

//save data in local storage
        var btn=document.getElementById("donebutton")
        
        btn.addEventListener("click", function(event) {
        event.preventDefault();
        var description = document.querySelector("#description").value;
        var time=document.querySelector("#hour").value;
        localStorage.setItem("Event-description", description);
        localStorage.setItem("Time",time)
//clean input fields        
        document.getElementById("hour").value=""
        document.getElementById("description").value=""

        renderScore()

})

})

}) 


var eight=document.getElementById("ciao1").innerHTML
var value =16
var time=moment().format("H")
if (time>value){

$("#firstrow,#secondrow").addClass("future")
$("#thirdrow,#fourthrow").addClass("past")}


console.log(eight)





function renderScore() {
    var description = localStorage.getItem("Event-description");
    var timeevent=JSON.parse(localStorage.getItem("Time"))
    console.log(timeevent)
    
    if (timeevent=="8"){
        document.getElementById("8").innerHTML = description;}
    else if(timeevent=="9") { 
        document.getElementById("9").innerHTML = description;}
    else if(timeevent=="10") { 
        document.getElementById("10").innerHTML = description;}
    else if(timeevent=="11") { 
        document.getElementById("11").innerHTML = description;}
    else if(timeevent=="12") { 
        document.getElementById("12").innerHTML = description;}
    else if(timeevent=="13") { 
        document.getElementById("13").innerHTML = description;}
    else if(timeevent=="14") { 
        document.getElementById("14").innerHTML = description;}
    else if(timeevent=="15") { 
        document.getElementById("15").innerHTML = description;}
    else if(timeevent=="16") { 
        document.getElementById("16").innerHTML = description;}
    else if(timeevent=="17") { 
        document.getElementById("17").innerHTML = description;}
    else if(timeevent=="18") { 
        document.getElementById("18").innerHTML = description;}
    else if(timeevent=="19") { 
        document.getElementById("19").innerHTML = description;}
    else if(timeevent=="20") { 
        document.getElementById("20").innerHTML = description;}
    else if(timeevent=="21") { 
        document.getElementById("21").innerHTML = description;}
    else if(timeevent=="22") { 
        document.getElementById("22").innerHTML = description;}
    else if(timeevent=="23") { 
        document.getElementById("23").innerHTML = description;}                                

    
   } 


