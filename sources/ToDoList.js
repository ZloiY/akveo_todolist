window.addEventListener('load', (loadEvent) => {
  main();
});

function main() {
  const addBtn = document.getElementById('addBtn');
  const allRadio = document.getElementById('all');
  const completeRadio = document.getElementById('complete');
  const activeRadio = document.getElementById('active');
  const checkUncheckBtn = document.getElementById('checkUncheck');
  const delCheckedBtn = document.getElementById('delBtn');
  const itemsNum = document.getElementById('itemsNum');
  const inputField = document.getElementById('itemInput');
  const allRadioLabel = document.getElementById('allTasks');
  const completeRadioLabel = document.getElementById('completeTasks');
  const activeRadioLabel = document.getElementById('activeTasks');
  const operations = new ItemListOperations();
  const eventListenersParameters = {
    operations,
    addBtn,
    allRadio,
    completeRadio,
    activeRadio,
    checkUncheckBtn,
    delCheckedBtn,
    inputField,
    allRadioLabel,
    completeRadioLabel,
    activeRadioLabel,
  };
  addBtnsFieldEvListeners(eventListenersParameters);
  addDocHotKeyEvListeners(eventListenersParameters);
  addInputFieldEvListener(eventListenersParameters);
}

function  addBtnsFieldEvListeners(eventListenersParameters) {
  eventListenersParameters.addBtn.addEventListener('click', eventListenersParameters.operations.addElement, false);
  eventListenersParameters.allRadio.addEventListener('click', eventListenersParameters.operations.displayAllItems, false);
  eventListenersParameters.completeRadio.addEventListener('click', eventListenersParameters.operations.displayCompleteItems, false);
  eventListenersParameters.activeRadio.addEventListener('click', eventListenersParameters.operations.displayItemsInProgress, false);
  eventListenersParameters.checkUncheckBtn.addEventListener('click', eventListenersParameters.operations.setCheckUnCheckAll, false);
  eventListenersParameters.delCheckedBtn.addEventListener('click', eventListenersParameters.operations.delCheckEl, false);
  eventListenersParameters.allRadioLabel.addEventListener('click', eventListenersParameters.operations.displayAllItems, false);
  eventListenersParameters.completeRadioLabel.addEventListener('click', eventListenersParameters.operations.displayCompleteItems, false);
  eventListenersParameters.activeRadioLabel.addEventListener('click', eventListenersParameters.operations.displayItemsInProgress, false);
}

function addInputFieldEvListener(eventListenersParameters) {
  eventListenersParameters.inputField.addEventListener('keyup', (enterDelPressed) => {
    enterKeyPressed(enterDelPressed.keyCode, eventListenersParameters.operations);
    delKeyPressed(enterDelPressed.keyCode, eventListenersParameters.operations);
  });
 }

function addDocHotKeyEvListeners(eventListenersParameters) {
  document.addEventListener('keyup', (hotKeyPressed) => {
    addHotKeyListeners(hotKeyPressed.keyCode, eventListenersParameters);
  });
}

function addHotKeyListeners(hotKeyCode, eventListenersParameters) {
  if (document.activeElement !== eventListenersParameters.inputField) {
    hotKeyAPressed(hotKeyCode, eventListenersParameters.operations, eventListenersParameters.allRadio);
    hotKeyCPressed(hotKeyCode, eventListenersParameters.operations, eventListenersParameters.completeRadio);
    hotKeyVPressed(hotKeyCode, eventListenersParameters.operations, eventListenersParameters.activeRadio);
    hotKeyDPressed(hotKeyCode, eventListenersParameters.operations);
    hotKeySPressed(hotKeyCode, eventListenersParameters.operations);
   }
}

function enterKeyPressed(enterKeyCode, operations) {
  if (enterKeyCode === 13) operations.addElement();
}

function delKeyPressed(delKeyCode, inputField) {
  if (delKeyCode === 46) inputField.value = '';
}

function hotKeyAPressed(hotKeyCode, operations, radioBtn) {
  if (hotKeyCode === 65){
    operations.displayAllItems();
     radioBtn.checked = true;
  }
}

function hotKeyCPressed(hotKeyCode, operations, radioBtn) {
  if (hotKeyCode === 67) {
    operations.displayCompleteItems();
    radioBtn.checked = true;
    }
}

function hotKeyVPressed(hotKeyCode, operations, radioBtn){
  if (hotKeyCode === 86) {
    operations.displayItemsInProgress();
    radioBtn.checked = true;
   }
}

function hotKeySPressed(hotKeyCode, operations) {
  if (hotKeyCode === 83) operations.setCheckUnCheckAll();
}

function hotKeyDPressed(hotKeyCode, operations) {
  if (hotKeyCode === 68) operations.delCheckEl();
}
