class ItemListOperations {

  constructor() {
    this.setCheck = false;
    this.activeItems = 0;
  }

  addElement() {
    const newTask = document.createElement('li');
    const inputValue = document.getElementById('itemInput').value;
    const taskName = document.createTextNode(inputValue);
    const closeBtn = createCloseBtn();
    const checkbox = createCheckBox();
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      document.getElementById('myList').appendChild(newTask);
    }
    document.getElementById('itemInput').value = '';
    checkbox.addEventListener('click', checkBoxListener);
    closeBtn.addEventListener('click', closeBtnListener);
    checkbox.className = 'task-checkbox-visible';
    closeBtn.className = 'task-close-btn';
    const newTaskObj = {
      newTask,
      checkbox,
      taskName,
      closeBtn,
    };
    taskListAppendChild(newTaskObj);
    increaseActiveItemCounter();
    completeItemCheck();
  }

  displayCompleteItems() {
    const itemsList = document.getElementById('myList');
    for (let item of itemsList.childNodes) {
      showCompleteItem(item);
    }
  }

  displayAllItems() {
    const itemsList = document.getElementById('myList');
    for (let itemNum=0; itemNum<itemsList.childNodes.length; itemNum += 1) {
      itemsList.childNodes[itemNum].className = 'task-visible';
      itemsList.childNodes[itemNum].childNodes[0].className = 'task-checkbox-visible';
    }
  }

  displayItemsInProgress() {
    const itemsList = document.getElementById('myList');
    for (let item of itemsList.childNodes) {
      showItemInProgress(item);
    }
  }

  setCheckUnCheckAll() {
    if (!this.setCheck) {
      setAllItemsTrue();
      this.setCheck = true;
    } else {
      setAllItemsFalse();
      this.setCheck = false;
    }
  }

  delCheckEl() {
    const itemsList = document.getElementById('myList');
    for (let itemsNum =0;  itemsNum < itemsList.childNodes.length; itemsNum += 1) {
      itemsNum =checkSearch(itemsNum, itemsList);
    }
  }
}

function checkSearch(
  itemNum,
  itemList
) {
  for (let itemAttr of itemList.childNodes[itemNum].childNodes) {
    const itemsNum = itemDel(itemAttr, itemList, itemNum);
    return itemsNum;
  }
}

function itemDel(itemAttr, itemList, itemNum) {
  if (itemAttr.id === 'check' && itemAttr.checked) {
    itemList.removeChild(itemList.childNodes[itemNum]);
    return -1;
  } else {
    return itemNum;
  }
}

function completeItemCheck() {
  if (document.getElementsByName('sort')[1].checked) {
    this.displayCompleteItems();
  }
}

function setAllItemsFalse() {
  const itemsList = document.getElementById('myList');
  for (let item of itemsList.childNodes) {
    searchCheckAttr(item, false);
  }
}

function setAllItemsTrue() {
  const itemsList = document.getElementById('myList');
  for (let item of itemsList.childNodes) {
    searchCheckAttr(item, true);
  }
}

function searchCheckAttr(item, checkBoxState) {
  for (let attr of item.childNodes) {
    setCheckBox(attr, checkBoxState);
  }
}

function setCheckBox(attr, checkBoxState) {
  if (attr.id === 'check') {
    attr.checked = checkBoxState;
    attr.checked ?  decreaseActiveItemCounter() : increaseActiveItemCounter();
  }
}

function checkBoxListener() {
  const itemList = document.getElementById('myList');
  for (let item of itemList.childNodes) {
    chekcBoxSearch(item);
  }
}

function chekcBoxSearch(item) {
  for (let attrs of item.childNodes) {
    checkClicked(attrs);
  }
}

function checkClicked(attrs) {
  if (attrs.id === 'check' && document.activeElement === attrs) {
    attrs.checked ? decreaseActiveItemCounter() : increaseActiveItemCounter();
  }
}

function closeBtnListener() {
  const itemsList = document.getElementById('myList');
  for (let item of itemsList.childNodes) {
    closeItemSearch(item, itemsList);
  }
}

function closeItemSearch(item, itemsList) {
  let isCheck;
  for (let attrs of item.childNodes) {
    isCheck = checkBoxCheck(attrs, isCheck);
    const closeBtnParameters = {
      itemsList,
      item,
      attrs,
      isCheck,
    };
    closeBtnClick(closeBtnParameters);
  }
}

function checkBoxCheck(attrs, isCheck) {
  if (attrs.id === 'check') {
     return !attrs.checked;
  }

  return isCheck;
}

function closeBtnClick(params) {
  if (params.attrs.id === 'closeBtn' && document.activeElement === params.attrs){
    params.itemsList.removeChild(params.item);
    params.isCheck ? decreaseActiveItemCounter() : 0;
  }
}

function showItemInProgress(item) {
  for (let attrs of item.childNodes) {
    setUpActiveListElVisibility(item, attrs);
  }
}

function setUpActiveListElVisibility(item, attrs) {
  if (attrs.id === 'check') {
    attrs.checked ? visibleCheckInvisListEl(item, attrs) : invisCheckVisListEl(item, attrs);
  }
}

function showCompleteItem(item) {
  for (let attrs of item.childNodes) {
    setUpCompleteListElVisibility(item, attrs);
  }
}

function setUpCompleteListElVisibility(item, attrs) {
  if (attrs.id === 'check') {
    attrs.checked ? invisCheckVisListEl(item, attrs) : visibleCheckInvisListEl(item, attrs);
  }
}

function invisCheckVisListEl(item, attrs) {
  item.className = 'task-visible';
  attrs.className = 'task-checkbox-invisible';
}

function visibleCheckInvisListEl(item, attrs) {
  attrs.className ='task-checkbox-visible';
  item.className = 'task-invisible';
}

function increaseActiveItemCounter() {
  if (isNaN(this.activeItems)) {
    this.activeItems = 0;
  }
  this.activeItems += 1;
  setActiveItemsInHTML();
}

function decreaseActiveItemCounter() {
  if (this.activeItems > 0) {
    this.activeItems -= 1;
  }
  setActiveItemsInHTML();
}

function setActiveItemsInHTML() {
  document.getElementById('itemsNum').innerHTML = this.activeItems;
}

function createCloseBtn() {
  const closeBtn = document.createElement('input');
  closeBtn.type = 'button';
  closeBtn.id = 'closeBtn';
  closeBtn.value = '\u00D7';
  return closeBtn;
}

function createCheckBox() {
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = 'check';
  return checkBox;
}

function taskListAppendChild(params) {
  params.newTask.appendChild(params.checkbox);
  params.newTask.appendChild(params.taskName);
  params.newTask.appendChild(params.closeBtn);
  params.newTask.className = 'task-visible';
}