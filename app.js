var input = document.querySelector('#input');
var addButton = document.querySelector('#button');
var toDoList = document.querySelector('#todolist');

var items = [];

addButton.addEventListener('click',addElements);
function addElements(){
    items.push(input.value)
    console.log(items)
    input.value = "";
    showData();
}

function showData(){
    toDoList.innerHTML = "";
    items.forEach(function(item,index){
        toDoList.innerHTML += `<li>${item}<a onclick="deleteItem(${index})"> X | </a> <a onclick="editItem(${index})">Edit</a>`

    })
}

function deleteItem(i){
    items.splice(i, 1)
    showData();
    
}

function editItem(index){
    var editedValue = prompt("Enter the new value")
    items.splice(index, 1, editedValue)
    showData();
}