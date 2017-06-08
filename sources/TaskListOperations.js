class ItemListOperations {

  constructor() {
    this.setCheck = false;
    this.activeItems = 0;
  }

  addElement() {
    const newTask = document.createElement('li');
    const $inputValue = $('#itemInput').val();
    const taskName = document.createTextNode($inputValue);
    const closeBtn = createCloseBtn();
    const checkbox = createCheckBox();
    const newTaskObj = {
      newTask,
      checkbox,
      taskName,
      closeBtn,
    };
    if ($inputValue === '') {
      alert('You must write something!');
      return;
    }
    $('#itemInput').val('');
    $(checkbox).click(checkBoxListener);
    $(closeBtn).click(closeBtnListener);
    $(checkbox).addClass('task-checkbox-visible');
    $(closeBtn).addClass('task-close-btn');
    taskListAppendChild(newTaskObj);
    increaseActiveItemCounter();
    completeItemCheck();
  }

  displayCompleteItems() {
    const $completeRadio = $('#complete');
    const $completeRadioLabel = $('#completeTasks');
    const $itemsList = $('#myList');
    radioGroupBtnCheck($completeRadio);
    radioGroupLabelsClicked($completeRadioLabel);
    for (let item of $itemsList.children()) {
      showCompleteItem(item);
    }
  }

  displayAllItems() {
    const $allRadio = $('#all');
    const $allRadioLabel = $('#allTasks');
    const $itemsList = $('#myList');
    radioGroupBtnCheck($allRadio);
    radioGroupLabelsClicked($allRadioLabel);
    for (let item of $itemsList.children()) {
      $(item).removeClass('task-invisible');
      $(item).find('#check').removeClass('task-checkbox-invisible');
    }
  }

  displayItemsInProgress() {
    const $activeRadio = $('#active');
    const $activeRadioLabel = $('#activeTasks');
    const $itemsList = $('#myList');
    radioGroupBtnCheck($activeRadio);
    radioGroupLabelsClicked($activeRadioLabel);
    for (let item of $itemsList.children()) {
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
    const $itemsList = $('#myList').children();
    for (let item of $itemsList) {
      checkSearch(item);
    }
  }
}

function checkSearch(item) {
  const $check = $(item).find('#check').prop('checked');
  if ($check) {
    $(item).remove();
  }
}

function completeItemCheck() {
  if ($('#complete').checked) {
    this.displayCompleteItems();
  }
}

function setAllItemsFalse() {
  const $itemsList = $('#myList');
  for (let item of $itemsList.children()) {
    searchCheckAttr(item, false);
  }
}

function setAllItemsTrue() {
  const $itemsList = $('#myList');
  for (let item of $itemsList.children()) {
    searchCheckAttr(item, true);
  }
}

function searchCheckAttr(item, checkBoxState) {
  $(item).find('#check').prop('checked', checkBoxState);
  checkBoxState ? decreaseActiveItemCounter() : increaseActiveItemCounter();
}

function checkBoxListener() {
  const $itemList = $('#myList');
  for (let item of $itemList.children()) {
    checkBoxSearch(item);
  }
}

function checkBoxSearch(item) {
  const $checkbox = $(item).find('#check');
  if ($($checkbox).is(':focus')) {
    $($checkbox).prop('checked') ? decreaseActiveItemCounter() : increaseActiveItemCounter();
  }
}

function closeBtnListener() {
  const $itemsList = $('#myList').children();
  for (let item of $itemsList) {
    closeItemSearch(item);
  }
}

function closeItemSearch(item) {
  const $check = $(item).find('#check').prop('checked');
  const $closeAttr = $(item).find('#closeBtn');
  if ($($closeAttr).is(':focus')) {
    $(item).remove();
    $check ? 0 : decreaseActiveItemCounter();
  }
}

function showItemInProgress(item) {
  const $checkAttr = $(item).find('#check');
  $($checkAttr).prop('checked') ? visibleCheckInvisListEl(item, $checkAttr) : invisCheckVisListEl(item, $checkAttr);
}

function showCompleteItem(item) {
  const $checkAttr = $(item).find('#check');
  $($checkAttr).prop('checked') ? invisCheckVisListEl(item, $checkAttr) : visibleCheckInvisListEl(item, $checkAttr);
}

function invisCheckVisListEl(item, attrs) {
  $(item).removeClass('task-invisible');
  $(attrs).addClass('task-checkbox-invisible');
}

function visibleCheckInvisListEl(item, attrs) {
  $(attrs).removeClass('task-checkbox-invisible');
  $(item).addClass('task-invisible');
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
  $('#itemsNum').html(this.activeItems);
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
  $('#myList').append(params.newTask);
}

function radioGroupBtnCheck(radioBtn) {
  if (!radioBtn.checked) {
    radioBtn.prop('checked', true);
  }
}

function radioGroupLabelsClicked(radioGroupLabel) {
  const $completeRadioGroupLabel = $('#completeTasks');
  const $activeRadioGroupLabel = $('#activeTasks');
  const $allRadioGroupLabel = $('#allTasks');
  switch (radioGroupLabel.prop('id')) {
    case $completeRadioGroupLabel.prop('id'): {
      $completeRadioGroupLabel.addClass('radio-btn-label-selected');
      $activeRadioGroupLabel.removeClass('radio-btn-label-selected');
      $allRadioGroupLabel.removeClass('radio-btn-label-selected');
      break;
    }
    case $activeRadioGroupLabel.prop('id'): {
      $completeRadioGroupLabel.removeClass('radio-btn-label-selected');
      $activeRadioGroupLabel.addClass('radio-btn-label-selected');
      $allRadioGroupLabel.removeClass('radio-btn-label-selected');
      break;
    }
    case $allRadioGroupLabel.prop('id'): {
      $completeRadioGroupLabel.removeClass('radio-btn-label-selected');
      $activeRadioGroupLabel.removeClass('radio-btn-label-selected');
      $allRadioGroupLabel.addClass('radio-btn-label-selected');
      break;
    }
    default: {

    }
  }
}
