
var btnSave = document.getElementById("btnAddTask")
btnSave.addEventListener("click", onSaveName)

var nameList = []

function onSaveName(){
    let list = document.getElementById("list")
    let inputName = document.getElementById("name")
    let inputDescription = document.getElementById("description")

    let name = inputName.value
    let description = inputDescription.value

    let item = {name, description}

    nameList.push(item)

    localStorage.setItem("names", JSON.stringify(nameList));
    let items = JSON.parse(localStorage.getItem("names"));
    
    let itemList = document.createElement('li');
    itemList.setAttribute("style", "font-size: 16px; list-style-type: none");

    let devList = document.createElement('div')
    devList.setAttribute("style", "display: flex; width: 500px; height: 80px; background-color: #D9D9D9; margin-top: 16px; align-items: center; padding-left: 16px; border-radius: 10px")

    let title = document.createElement('p')
    let text = document.createTextNode("Name");
    
    title.appendChild(text)

    let devListContainer = document.createElement('div')

    devListContainer.appendChild(title)
    devListContainer.appendChild(devList)

    for (i = 0; i < items.length; ++i) {
        itemList.innerHTML = items[i].name;

        devList.appendChild(itemList)
        list.appendChild(devListContainer)
    }

    if(inputName.value != ""){
        inputName.value = ""
    }

    if(inputDescription.value != ""){
        inputDescription.value = ""
    }

}
