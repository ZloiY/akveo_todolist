class ItemListOperations{

    constructor(){
        this.setCheck = false;
        this.activeItems = 0;
    }

    addElement() {
        const newTask = document.createElement('li');
        const inputValue = document.getElementById('itemInput').value;
        const taskName = document.createTextNode(inputValue);
        if (inputValue === '')
            alert('You must write something!');
        else document.getElementById('myList').appendChild(newTask);
        document.getElementById('itemInput').value = '';
        const close = createCloseBtn();
        const checkBox = createCheckBox();
        newTaskAppendChildren(newTask, checkBox, taskName, close);
        checkBox.addEventListener('click', checkBoxListener(checkBox));
        close.addEventListener('click', closeBtnListener);
        increaseActiveItemCounter();
        completeItemCheck();
    }

    displayCompleteItems(){
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes)
            showCompleteItem(item);
    }

    displayAllItems(){
        const itemsList = document.getElementById('myList');
        for(let itemNum=0; itemNum<itemsList.childNodes.length; itemNum++) {
            itemsList.childNodes[itemNum].className = 'stdListEl';
            itemsList.childNodes[itemNum].childNodes[0].className = 'visibleCheckBox';
        }
    }

    displayItemsInProgress(){
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes)
           showItemInProgress(item);
    }

    setCheckUnCheckAll(){
        dropActiveItemCounter();
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
                    decreaseActiveItemCounter();
                }
            }
        }
    }
}

function completeItemCheck(){
    if (document.getElementsByName('sort')[1].checked)
        this.displayCompleteItems();
}

function increaseActiveItemCounter(){
    this.activeItems++;
    setActiveItemsInHTML();
}

function decreaseActiveItemCounter(){
    if (this.activeItems > 0)
        this.activeItems--;
    setActiveItemsInHTML();
}

function dropActiveItemCounter(){
    this.activeItems = 0;
    setActiveItemsInHTML();
}

function setAllItemsTrue() {
    const itemsList = document.getElementById('myList');
    dropActiveItemCounter();
    for (let item of itemsList.childNodes) {
        for (let attrs of item.childNodes)
            if (attrs.id === 'check') {
                attrs.checked = true;
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
                increaseActiveItemCounter();
                break;
            }
    }
}

function checkBoxListener(checkBox){
    if(checkBox.checked)
        decreaseActiveItemCounter();
    else increaseActiveItemCounter();
}

function closeBtnListener(){
    const itemsList = document.getElementById('myList');
    for (let item of itemsList.childNodes){
          closeItemSearch(item, itemsList);
          break;
    }
}

function setActiveItemsInHTML() {
    document.getElementById('itemsNum').innerHTML = this.activeItems;
}

function showItemInProgress(item){
    for(let attrs of item.childNodes)
        setUpActiveListElVisibility(item, attrs);
}

function setUpActiveListElVisibility(item, attrs) {
    if (attrs.id === 'check' && attrs.checked)
        visibleCheckInvisListEl(item, attrs);
    else
        if (attrs.id === 'check')
            invisCheckVisListEl(item, attrs);
}

function showCompleteItem(item) {
    for(let attrs of item.childNodes)
       setUpCompleteListElVisibility(item, attrs);
}

function setUpCompleteListElVisibility (item, attrs){
    if(attrs.id === 'check' && attrs.checked)
        invisCheckVisListEl(item, attrs);
    else
        if (attrs.id === 'check')
            visibleCheckInvisListEl(item, attrs)
}

function invisCheckVisListEl (item, attrs) {
    item.className = 'stdListEl';
    attrs.className = 'invisibleCheckBox';
}

function visibleCheckInvisListEl(item, attrs){
    attrs.className ='visibleCheckBox';
    item.className = 'invisibleListEl';
}

function closeItemSearch(item, itemsList){
    let decreaseToken = false;
    for(let attrs of item.childNodes){
        if (attrs.id === 'check' && attrs.checked)
           decreaseToken = true;
        if (attrs.id === 'closeBtn' && attrs.click){
            itemsList.removeChild(item);
            decreaseToken ? this.decreaseActiveItemCounter() : 0;
        }
    }
}

function createCloseBtn(){
    const closeBtn = document.createElement('input');
    closeBtn.type = 'button';
    closeBtn.id = 'closeBtn';
    closeBtn.value = '\u00D7';
    return closeBtn;
}

function createCheckBox(){
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = 'check';
    return checkBox;
}

/*
function newTaskAppendChildren(newTask, ...children) {
    // for (let child of children)
    //     newTask.appendChild(child);
}*/

function newTaskAppendChildren(newTask, checkbox, name, closeBtn) {
    newTask.appendChild(checkbox);
    newTask.appendChild(name);
    newTask.appendChild(closeBtn);
}