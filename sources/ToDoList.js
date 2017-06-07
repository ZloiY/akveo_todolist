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
  const operations = new ItemListOperations();
  addBtnsFieldEvListeners(
    operations,
    addBtn,
    allRadio,
    completeRadio,
    activeRadio,
    checkUncheckBtn,
    delCheckedBtn
  );
  addDocHotKeyEvListeners(
    operations,
    allRadio,
    completeRadio,
    activeRadio,
    inputField
  );
  addInputFieldEvListener(
    inputField,
    operations
  );
}

function  addBtnsFieldEvListeners(
  operations,
  addBtn,
  allRadio,
  completeRadio,
  activeRadio,
  checkUncheckBtn,
  delCheckedBtn
) {
  addBtn.addEventListener('click', operations.addElement, false);
  allRadio.addEventListener('click', operations.displayAllItems, false);
  completeRadio.addEventListener('click', operations.displayCompleteItems, false);
  activeRadio.addEventListener('click', operations.displayItemsInProgress, false);
  checkUncheckBtn.addEventListener('click', operations.setCheckUnCheckAll, false);
  delCheckedBtn.addEventListener('click', operations.delCheckEl, false);
}

function addInputFieldEvListener(
  inputField,
  operations
) {
  inputField.addEventListener('keyup', (enterDelPressed) => {
    enterKeyPressed(
      enterDelPressed.keyCode,
      operations
    );
    delKeyPressed(
      enterDelPressed.keyCode,
      operations
    );
  });
 }

function addDocHotKeyEvListeners(
  operations,
  allRadio,
  completeRadio,
  activeRadio,
  inputField
) {
  document.addEventListener('keyup', (hotKeyPressed) => {
    addHotKeyListners(
      hotKeyPressed.keyCode,
      operations,
      allRadio,
      completeRadio,
      activeRadio,
      inputField
    );
  });
}

function addHotKeyListners(
  hotKeyCode,
  operations,
  allRadio,
  completeRadio,
  activeRadio,
  inputField
) {
  if (document.activeElement !== inputField) {
    hotKeyAPressed(
      hotKeyCode,
      operations,
      allRadio
    );
    hotKeyCPressed(
      hotKeyCode,
      operations,
      completeRadio
    );
    hotKeyVPressed(
      hotKeyCode,
      operations,
      activeRadio
    );
    hotKeyDPressed(
      hotKeyCode,
      operations
    );
    hotKeySPressed(
      hotKeyCode,
      operations
    );
   }
}

function enterKeyPressed(
  enterKeyCode,
  operations
) {
  if (enterKeyCode === 13) operations.addElement();
}

function delKeyPressed(
  delKeyCode,
  inputField
) {
  if (delKeyCode === 46) inputField.value = '';
}

function hotKeyAPressed(
  hotKeyCode,
  operations,
  radioBtn
) {
  if (hotKeyCode === 65){
    operations.displayAllItems();
     radioBtn.checked = true;
  }
}

function hotKeyCPressed(
  hotKeyCode,
  operations,
  radioBtn
) {
  if (hotKeyCode === 67) {
    operations.displayCompleteItems();
    radioBtn.checked = true;
    }
}

function hotKeyVPressed(
  hotKeyCode,
  operations,
  radioBtn
){
  if (hotKeyCode === 86) {
    operations.displayItemsInProgress();
    radioBtn.checked = true;
   }
}

function hotKeySPressed(
  hotKeyCode,
  operations
) {
  if (hotKeyCode === 83) operations.setCheckUnCheckAll();
}

function hotKeyDPressed(
  hotKeyCode,
  operations
) {
  if (hotKeyCode === 68) operations.delCheckEl();
}