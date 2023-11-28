//section of creating notes
const notesContainer=document.querySelector(".notes-container")
const createBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input-box")

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()





function updatesStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)

}


createBtn.addEventListener("click",()=>{
let inputBox=document.createElement("p")
let img=document.createElement("img")
inputBox.className="input-box"
inputBox.setAttribute("contenteditable","true")
img.src="/6048190.png"
notesContainer.appendChild(inputBox).appendChild(img)
updatesStorage();

}) 
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove()
         updatesStorage();

         

}
else if(e.target.tagName ==="p"){
    notes=document.querySelectorAll(".input-box")
    notes.forEach(nt =>{
        nt.onkeyup = function(){
            updatesStorage()

        }
    })
}
    })



