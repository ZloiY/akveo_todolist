let setCheck =false;
function addElement() {
    let newTask = document.createElement("li");
    let inputValue = document.getElementById("itemInput").value;
    let taskName = document.createTextNode(inputValue);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myList").appendChild(newTask);
    }
    document.getElementById("itemInput").value = "";
    let close = document.createElement("input");
    close.type = "button";
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "check";
    checkBox.className ='checkbox';
    close.className ='closeBtn';
    taskName.className='itemName';
    close.value = "\u00D7";
    close.onclick = function () {
        let itemsList = document.getElementById("myList");
        for (let i=0; i < itemsList.childNodes.length; i++){
             if(itemsList.childNodes[i].click) {
                itemsList.removeChild(itemsList.childNodes[i]);
                break;
             }
        }
    };
    newTask.appendChild(checkBox);
    newTask.appendChild(taskName);
    newTask.appendChild(close);
    if (document.getElementsByName("sort")[1].checked)
        completeItems();
}
function setCheckUncheckAll() {
    let itemsList = document.getElementById("myList");
    if (!setCheck) {
        for (let i = 0; i < itemsList.childNodes.length; i++) {
           let liItems = itemsList.childNodes[i].childNodes;
            for (let j=0; j< liItems.length; j++)
                if (liItems[j].id === "check")
                    liItems[j].checked = true;
        }
        setCheck = true;
    }else {
        for (let i = 0; i < itemsList.childNodes.length; i++) {
            let liItems = itemsList.childNodes[i].childNodes;
                for (let j = 0; j < liItems.length; j++)
                    if (liItems[j].id === "check")
                        liItems[j].checked = false;
        }
        setCheck = false;
    }
}
function delCheckedElements(){
    let itemsList = document.getElementById("myList");
    for (let i=0; i < itemsList.childNodes.length; i++){
        let liItems = itemsList.childNodes[i].childNodes;
        for(let j=0; j<liItems.length; j++){
            if (liItems[j].id === "check" && liItems[j].checked === true) {
                itemsList.removeChild(itemsList.childNodes[i]);
                i=-1;
                break;
            }
        }
    }
}
function allItems(){
    let itemsList = document.getElementById("myList");
    for(let i=0; i<itemsList.childNodes.length; i++) {
        itemsList.childNodes[i].style.display = "block";
        itemsList.childNodes[i].childNodes[0].style.visibility = "visible";
    }
}
function completeItems(){
    let itemsList = document.getElementById("myList");
    for (let i=0; i < itemsList.childNodes.length; i++){
        let liItems = itemsList.childNodes[i].childNodes;
        for(let j=0; j<liItems.length; j++){
            if (liItems[j].id === "check" && liItems[j].checked === true) {
                liItems[j].style.visibility = "hidden";
                itemsList.childNodes[i].style.display="block";
            }else
                if (liItems[j].id ==="check") {
                    liItems[j].style.visibility="visible";
                    itemsList.childNodes[i].style.display = "none";
                }
        }
    }
}
function itemsInProgress() {
    let itemsList = document.getElementById("myList");
    for (let i=0; i < itemsList.childNodes.length; i++){
        let liItems = itemsList.childNodes[i].childNodes;
        for(let j=0; j<liItems.length; j++){
            if (liItems[j].id === "check" && liItems[j].checked === true) {
                itemsList.childNodes[i].style.display="none";
                liItems[j].style.visibility = "visible"
            }else
                if (liItems[j].id==="check") {
                    liItems[j].style.visibility="hidden";
                    itemsList.childNodes[i].style.display = "block";
                }
        }
    }
}
