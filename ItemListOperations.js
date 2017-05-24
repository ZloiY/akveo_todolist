class ItemListOperations{

    constructor(){
        this.setCheck = false;
    }

    addElement() {
        let newTask = document.createElement('li');
        let inputValue = document.getElementById('itemInput').value;
        let taskName = document.createTextNode(inputValue);
        if (document.getElementById('itemsNum').innerHTML.length === 0)
            document.getElementById('itemsNum').innerHTML = '0';
        if (inputValue === '') {
            alert('You must write something!');
        } else {
            document.getElementById('myList').appendChild(newTask);
        }
        document.getElementById('itemInput').value = '';
        let close = document.createElement('input');
        close.type = 'button';
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'check';
        close.value = '\u00D7';
        newTask.appendChild(checkBox);
        newTask.appendChild(taskName);
        newTask.appendChild(close);
        checkBox.onclick = clickEvent => checkBoxListener(checkBox);
        close.onclick = clickEvent => closeBtnListener();
        if (document.getElementsByName('sort')[1].checked)
            this.displayCompleteItems();
    }

    displayCompleteItems(){
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes){
            hideShowItem(item);
        }
    }

    displayAllItems(){
        const itemsList = document.getElementById('myList');
        for(let itemNum=0; itemNum<itemsList.childNodes.length; itemNum++) {
            itemsList.childNodes[itemNum].style.display = 'block';
            itemsList.childNodes[itemNum].childNodes[0].style.visibility = 'visible';
        }
    }

    displayItemsInProgress(){
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes){
            hideShowItem(item);
        }
    }

    setCheckUnCheckAll(){
        document.getElementById('itemsNum').innerHTML = '0';
        if (!this.setCheck) {
            setAllItemsTrue();
            this.setCheck = true;
        }else {
            setAllItemsFalse();
            this.setCheck = false;
        }
    }

    delCheckEl() {
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes){
            for (let itemAttr of item.childNodes){
                if (itemAttr.id === 'check' && itemAttr.checked) {
                    itemsList.removeChild(item);
                    decreaseItemCounter();
                }
            }
        }
    }
}

function setAllItemsTrue() {
    const itemsList = document.getElementById('myList');
    for (let item of itemsList.childNodes) {
        for (let attrs of item.childNodes)
            if (attrs.id === 'check') {
                attrs.checked = true;
                increaseItemCounter();
                break;
            }
    }
}

function setAllItemsFalse(){
    const itemsList = document.getElementById('myList');
    for (let item of itemsList.childNodes) {
        for (let attrs of item.childNodes)
            if (attrs.id === 'check') {
                attrs.checked = false;
                break;
            }
    }
}

function checkBoxListener(checkBox){
    if(checkBox.checked)
        increaseItemCounter();
    else decreaseItemCounter();
}

function closeBtnListener(){
    const itemsList = document.getElementById('myList');
    for (let itemsNum=0; itemsNum < itemsList.childNodes.length; itemsNum++){
        if (itemsList.childNodes[itemsNum].click) {
            itemsList.childNodes[itemsNum].childNodes[0].checked  ? decreaseItemCounter() : false;
            itemsList.removeChild(itemsList.childNodes[itemsNum]);
            break;
        }
    }
}

function increaseItemCounter() {
    document.getElementById('itemsNum').innerHTML++;
}

function decreaseItemCounter() {
    document.getElementById('itemsNum').innerHTML--;
}

function hideShowItem(item){
    for(let attrs of item.childNodes){
        if (attrs.id === 'check' && attrs.checked === true) {
            item.style.display = 'none';
            attrs.style.visibility = 'visible';
            break;
        }else
            if (attrs.id === 'check') {
                attrs.style.visibility='hidden';
                item.style.display = 'block';
                break;
            }
    }
}