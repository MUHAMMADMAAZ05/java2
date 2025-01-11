let heading=document.createElement("h1")
document.body.appendChild(heading)
heading.innerText="Grocery Buy"
let inp=document.createElement("input")
document.body.appendChild(inp)
let submit=document.createElement("button")
document.body.appendChild(submit)
submit.innerHTML="Submit"
let arroftodo=[]
submit.setAttribute("onclick","submitb()")
let list=document.createElement("div")
document.body.appendChild(list)
function submitb(){
    arroftodo.push(inp.value)
    list.innerHTML='';
    arroftodo.forEach(function(element){
        list.innerHTML +=  `<div class="listItem"><span class="listItemText">${element}</span>
        <button onclick="edit(this)">Edit</button>
        <button onclick="del(this)">Delete</button>
        </div>`
    })
    
}

function del(button){
    button.parentElement.remove()
    

// document.querySelector(list)=inp.value
