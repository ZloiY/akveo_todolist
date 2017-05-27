class ItemListOperations{

    constructor(){
        this.setCheck = false;
    }

    addElement() {
        const newTask = document.createElement('li');
        const inputValue = document.getElementById('itemInput').value;
        const taskName = document.createTextNode(inputValue);
        if (inputValue === '') {
            alert('You must write something!');
        } else {
            document.getElementById('myList').appendChild(newTask);
        }
        document.getElementById('itemInput').value = '';
        const close = document.createElement('input');
        close.type = 'button';
        close.id = 'closeBtn';
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = 'check';
        close.value = '\u00D7';
        newTask.appendChild(checkBox);
        newTask.appendChild(taskName);
        newTask.appendChild(close);
        checkBox.addEventListener('click', checkBoxListener(checkBox));
        close.addEventListener('click', closeBtnListener);
        this.completeItemCheck();
    }

    displayCompleteItems(){
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes)
            showCompleteItem(item);
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
        for (let item of itemsList.childNodes)
           showItemInProgress(item);
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
        for (let itemsNum =0;  itemsNum < itemsList.childNodes.length; itemsNum++){
            for (let itemAttr of itemsList.childNodes[itemsNum].childNodes){
                if (itemAttr.id === 'check' && itemAttr.checked) {
                    itemsList.removeChild(itemsList.childNodes[itemsNum]);
                    itemsNum = -1;
                    decreaseItemCounter();
                }
            }
        }
    }

    completeItemCheck(){
        if (document.getElementsByName('sort')[1].checked)
            this.displayCompleteItems();
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
    for (let item of itemsList.childNodes){
          closeItemSearch(item, itemsList);
          break;
    }
}

function increaseItemCounter() {
    document.getElementById('itemsNum').innerHTML++;
}

function decreaseItemCounter() {
    document.getElementById('itemsNum').innerHTML--;
}

function showItemInProgress(item){
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

function showCompleteItem(item) {
    for(let attrs of item.childNodes){
        if (attrs.id === 'check' && attrs.checked === true) {
            item.style.display = 'block';
            attrs.style.visibility = 'hidden';
            break;
        }else
        if (attrs.id === 'check') {
            attrs.style.visibility='visible';
            item.style.display = 'none';
            break;
        }
    }
}

function closeItemSearch(item, itemsList){
    let decreaseToken = false;
    for(let attrs of item.childNodes){
        if (attrs.id === 'check' && attrs.checked)
           decreaseToken = true;
        if (attrs.id === 'closeBtn' && attrs.click){
            itemsList.removeChild(item);
            decreaseToken ? decreaseItemCounter() : 0;
        }
    }
}