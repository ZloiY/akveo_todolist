class ItemListOperations{

    static CHECK_BOX_ID = 'check';

    constructor(){
        this.setCheck = false;
        this.itemsList = document.getElementById('myList');
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
        checkBox.id = this.CHECK_BOX_ID;
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
        for (let item of this.itemsList.childNodes){
            hideShowItem(item);
        }
    }

    displayAllItems(){
        for(let itemNum=0; itemNum<this.itemsList.childNodes.length; itemNum++) {
            this.itemsList.childNodes[itemNum].style.display = 'block';
            this.itemsList.childNodes[itemNum].childNodes[0].style.visibility = 'visible';
        }
    }

    displayItemsInProgress(){
        for (let item of this.itemsList.childNodes){
            hideShowItem(item);
        }
    }

    setCheckUnCheckAll(){
        document.getElementById('itemsNum').innerHTML = '0';
        if (!this.setCheck) {
            for (let item of this.itemsList.childNodes) {
                for (let attrs of item.childNodes)
                    if (attrs.id === this.CHECK_BOX_ID) {
                        attrs.checked = true;
                        increaseItemCounter();
                    }
            }
             this.setCheck = true;
        }else {
            for (let item of this.itemsList.childNodes) {
                for (let attrs of item.childNodes)
                    if (attrs.id === this.CHECK_BOX_ID)
                        attrs.checked = false;
            }
            this.setCheck = false;
        }
    }

    delCheckEl() {
        for (let item of this.itemsList.childNodes){
            for (let itemAttr of item.childNodes){
                if (itemAttr.id === this.CHECK_BOX_ID && itemAttr.checked) {
                    this.itemsList.removeChild(item);
                    decreaseItemCounter();
                }
            }
        }
    }
}

function checkBoxListener(checkBox){
    if(checkBox.checked)
        increaseItemCounter();
    else
        decreaseItemCounter();
}

function closeBtnListener(){
    for (let i=0; i < this.itemsList.childNodes.length; i++){
        if (this.itemsList.childNodes[i].click) {
            this.itemsList.childNodes[i].childNodes[0].checked  ? decreaseItemCounter() : false;
            this.itemsList.removeChild(this.itemsList.childNodes[i]);
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
        if (attrs.id === this.CHECK_BOX_ID && attrs.checked === true) {
            item.style.display = 'none';
            attrs.style.visibility = 'visible';
        }
        if (attrs.id === this.CHECK_BOX_ID) {
            attrs.style.visibility='hidden';
            item.style.display = 'block';
        }
    }
}