//retrieve current day
var day =document.getElementById("currentDay")
var actualDay=moment().format("Do MMMM YYYY")
day.textContent=actualDay   

//first hour
var textArea1=document.querySelector("#task1")
    textArea1.value=localStorage.getItem("Description1")
//second hour    
var textArea2=document.querySelector("#task2")
    textArea2.value=localStorage.getItem("Description2")
//third hour    
var textArea3=document.querySelector("#task3")
    textArea3.value=localStorage.getItem("Description3")
//fourth hour    
var textArea4=document.querySelector("#task4")
    textArea4.value=localStorage.getItem("Description4")
//fifth hour    
var textArea5=document.querySelector("#task5")
    textArea5.value=localStorage.getItem("Description5")
//sixth hour    
var textArea6=document.querySelector("#task6")
    textArea6.value=localStorage.getItem("Description6")
//seventh hour    
var textArea7=document.querySelector("#task7")
    textArea7.value=localStorage.getItem("Description7")
//eighth hour    
var textArea8=document.querySelector("#task8")
    textArea8.value=localStorage.getItem("Description8")
//ninth hour    
var textArea9=document.querySelector("#task9")
    textArea9.value=localStorage.getItem("Description9")
//tenth hour    
var textArea10=document.querySelector("#task10")
    textArea10.value=localStorage.getItem("Description10")
//eleventh hour    
var textArea11=document.querySelector("#task11")
    textArea11.value=localStorage.getItem("Description11")
//twelwth hur 
var textArea12=document.querySelector("#task12")
    textArea12.value=localStorage.getItem("Description12")
//thirtheen hour    
var textArea13=document.querySelector("#task13")
    textArea13.value=localStorage.getItem("Description13")

//first button
var myBtn1=document.getElementById("save1")
myBtn1.addEventListener("click",function(event){
event.preventDefault()
var description1=document.querySelector("#task1").value
localStorage.setItem("Description1",description1)
})
//second button
var myBtn2=document.getElementById("save2")
myBtn2.addEventListener("click",function(event){
    event.preventDefault()
     var description2=document.querySelector("#task2").value
    localStorage.setItem("Description2",description2)
})
//third button
var myBtn3=document.getElementById("save3")
myBtn3.addEventListener("click",function(event){
    event.preventDefault()
     var description3=document.querySelector("#task3").value
    localStorage.setItem("Description3",description3)
})
//fourth button
var myBtn4=document.getElementById("save4")
myBtn4.addEventListener("click",function(event){
    event.preventDefault()
     var description4=document.querySelector("#task4").value
    localStorage.setItem("Description4",description4)
})
//fifth button
var myBtn5=document.getElementById("save5")
myBtn5.addEventListener("click",function(event){
    event.preventDefault()
     var description5=document.querySelector("#task5").value
    localStorage.setItem("Description5",description5)
})
//sixth button
var myBtn6=document.getElementById("save6")
myBtn6.addEventListener("click",function(event){
    event.preventDefault()
     var description6=document.querySelector("#task6").value
    localStorage.setItem("Description6",description6)
})
//seventh button
var myBtn7=document.getElementById("save7")
myBtn7.addEventListener("click",function(event){
    event.preventDefault()
     var description7=document.querySelector("#task7").value
    localStorage.setItem("Description7",description7)
})

//eighth button
var myBtn8=document.getElementById("save8")
myBtn8.addEventListener("click",function(event){
    event.preventDefault()
     var description8=document.querySelector("#task8").value
    localStorage.setItem("Description8",description8)
})
//ninth button
var myBtn9=document.getElementById("save9")
myBtn9.addEventListener("click",function(event){
    event.preventDefault()
     var description9=document.querySelector("#task9").value
    localStorage.setItem("Description9",description9)
})
//tenth button
var myBtn10=document.getElementById("save10")
myBtn10.addEventListener("click",function(event){
    event.preventDefault()
     var description10=document.querySelector("#task10").value
    localStorage.setItem("Description10",description10)
})
//eleventh button
var myBtn11=document.getElementById("save11")
myBtn11.addEventListener("click",function(event){
    event.preventDefault()
     var description11=document.querySelector("#task11").value
    localStorage.setItem("Description11",description11)
})
//twelwth button
var myBtn12=document.getElementById("save12")
myBtn12.addEventListener("click",function(event){
    event.preventDefault()
     var description12=document.querySelector("#task12").value
    localStorage.setItem("Description12",description12)
})
//thirteenth button
var myBtn13=document.getElementById("save13")
myBtn13.addEventListener("click",function(event){
    event.preventDefault()
     var description13=document.querySelector("#task13").value
    localStorage.setItem("Description13",description13)
})


//assign a color based on if the time is past/present/future
var row=$('tr')
var hourArray=[]
var time=Number(moment().format("H"))
var table = document.getElementById('mytable');

//iterate over the table
function GetCellValues() {
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {}
        hourArray.push(table.rows[r].cells[0].innerHTML);
//comparing time with the hours
        if(hourArray[r]<time){row.eq(r).addClass("past")}
        
        else if (hourArray[r]==time) {row.eq(r).addClass("present")} 
        
        else {row.eq(r).addClass("future")}}
}

GetCellValues()










