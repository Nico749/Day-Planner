//retrieve current day
var day =document.getElementById("currentDay")
var actualDay=moment().format("Do MMMM YYYY")
day.textContent=actualDay   


 var dayevent =document.getElementById("event")
 dayevent.textContent=""

 //dayevent.on("click",function(){alert("clicked")})

//dayevent.on("click",function(){alert("clicked")})


$(document).ready(function () {
    $(".add_exp1").click(function(){
        $(".exp").append('<br><br><br>'+
        '<input type="input" style="width: 60%;" class="form-control" id="hour" placeholder="Hour 00:00">'+
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

function renderScore() {
    var description = localStorage.getItem("Event-description");
    var timeevent=localStorage.getItem("time")
    if(timeevent="8") { 
        document.getElementById("event").innerHTML = description;}
    else if (timeevent="9"){
        document.getElementById("event1").innerHTML = description;}
   }
   


