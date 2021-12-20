//retrieve current day
var day =document.getElementById("currentDay")
var actualDay=moment().format("Do MMMM YYYY")
day.textContent=actualDay   

var textArea=document.querySelector("#task1")
    textArea.value=localStorage.getItem("Description")
    
var textArea1=document.querySelector("#shopping-input1")
    textArea1.value=localStorage.getItem("Description1")


var myBtn=document.getElementById("save")
myBtn.addEventListener("click",function(event){
event.preventDefault()
var description=document.querySelector("#task1").value
localStorage.setItem("Description",description)
})

var myBtn1=document.getElementById("save1")
myBtn1.addEventListener("click",function(event){
    event.preventDefault()
     var description1=document.querySelector("#shopping-input1").value
    localStorage.setItem("Description1",description1)
})






//var eight=document.getElementById("ciao1").innerHTML
var value =20
var time=moment().format("H")
if (time>value){

$("#firstrow,#secondrow").addClass("future")
$("#hour").css("background-color","yellow")
$("#hour1").css("background-color","yellow")
//$("#8").addClass("saveBtn")
//$("#8,#9,#10,#11,#12,#13,#14,#15,#16,#17,#18,#19,#20,#21,#22,#23").addClass("saveBtn ")

}





