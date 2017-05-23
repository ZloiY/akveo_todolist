class ItemListOperations{

    constructor(){
        this.setCheck = false;
    }

    addElement() {
        let newTask = document.createElement('li');
        let inputValue = document.getElementById('itemInput').value;
        let taskName = document.createTextNode(inputValue);
        if (document.getElementById('itemsNum').innerHTML.length ===0)
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
        let itemsList = document.getElementById('myList');
        for (let itemNum=0; itemNum < itemsList.childNodes.length; itemNum++){
            let liItems = itemsList.childNodes[itemNum].childNodes;
            for(let attrNum=0; attrNum<liItems.length; attrNum++){
                if (liItems[attrNum].id === 'check' && liItems[attrNum].checked === true) {
                    liItems[attrNum].style.visibility = 'hidden';
                    itemsList.childNodes[itemNum].style.display='block';
                }
                if (liItems[attrNum].id ==='check') {
                    liItems[attrNum].style.visibility='visible';
                    itemsList.childNodes[itemNum].style.display = 'none';
                }
            }
        }
    }

    displayAllItems(){
        let itemsList = document.getElementById('myList');
        for(let itemNum=0; itemNum<itemsList.childNodes.length; itemNum++) {
            itemsList.childNodes[itemNum].style.display = 'block';
            itemsList.childNodes[itemNum].childNodes[0].style.visibility = 'visible';
        }
    }

    displayItemsInProgress(){
        const itemsList = document.getElementById('myList');
        for (let itemNum=0; itemNum < itemsList.childNodes.length; itemNum++){
            let itemAttrs = itemsList.childNodes[itemNum].childNodes;
            for(let attrNum=0; attrNum<itemAttrs.length; attrNum++){
                if (itemAttrs[attrNum].id === 'check' && itemAttrs[attrNum].checked === true) {
                    itemsList.childNodes[itemNum].style.display = 'none';
                    itemAttrs[attrNum].style.visibility = 'visible';
                }
                if (itemAttrs[attrNum].id==='check') {
                    itemAttrs[attrNum].style.visibility='hidden';
                    itemsList.childNodes[itemNum].style.display = 'block';
                }
            }
        }
    }

    setCheckUnCheckAll(){
        const itemsList = document.getElementById('myList');
        document.getElementById('itemsNum').innerHTML = '0';
        if (!this.setCheck) {
            for (let itemsNum = 0; itemsNum < itemsList.childNodes.length; itemsNum++) {
                let itemAttrs = itemsList.childNodes[itemsNum].childNodes;
                for (let attrNum=0; attrNum< itemAttrs.length; attrNum++)
                    if (itemAttrs[attrNum].id === 'check') {
                        itemAttrs[attrNum].checked = true;
                        document.getElementById('itemsNum').innerHTML++;
                    }
            }
             this.setCheck = true;
        }else {
            for (let itemNum = 0; itemNum < itemsList.childNodes.length; itemNum++) {
                let itemAttrs = itemsList.childNodes[itemNum].childNodes;
                for (let attrNum = 0; attrNum < itemAttrs.length; attrNum++)
                    if (itemAttrs[attrNum].id === 'check')
                        itemAttrs[attrNum].checked = false;
            }
            this.setCheck = false;
        }
    }

    delCheckEl() {
        const itemsList = document.getElementById('myList');
        for (let item of itemsList.childNodes){
            for (let itemAttr of item.childNodes){
                if (itemAttr.id === 'check' && itemAttr.checked) {
                    itemsList.removeChild(item);
                    document.getElementById('itemsNum').innerHTML--;
                }
            }
        }
    }
}

function checkBoxListener(checkBox){
    if(checkBox.checked)
        document.getElementById('itemsNum').innerHTML++;
    else
        document.getElementById('itemsNum').innerHTML--;
}

function closeBtnListener(){
    const itemsList = document.getElementById('myList');
    for (let i=0; i < itemsList.childNodes.length; i++){
        if (itemsList.childNodes[i].click) {
            itemsList.childNodes[i].childNodes[0].checked  ? document.getElementById('itemsNum').innerHTML-- : false;
            itemsList.removeChild(itemsList.childNodes[i]);
            break;
        }
    }
}
