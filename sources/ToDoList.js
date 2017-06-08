window.addEventListener('load', (loadEvent) => {
  main();
});

function main() {
  const operations = new ItemListOperations();
  operations.displayAllItems();
  addBtnsFieldEvListeners(operations);
  addDocHotKeyEvListeners(operations);
  addInputFieldEvListener(operations);
}

function  addBtnsFieldEvListeners(operations) {
  $('#addBtn').click(operations.addElement);
  $('#all').click(operations.displayAllItems);
  $('#complete').click(operations.displayCompleteItems);
  $('#active').click(operations.displayItemsInProgress);
  $('#checkUncheck').click(operations.setCheckUnCheckAll);
  $('#delBtn').click(operations.delCheckEl);
  $('#allTasks').click(operations.displayAllItems);
  $('#completeTasks').click(operations.displayCompleteItems);
  $('#activeTasks').click(operations.displayItemsInProgress);
}

function addInputFieldEvListener(operations) {
  $('#itemInput').keyup((enterDelPressed) => {
    enterKeyPressed(enterDelPressed.keyCode, operations);
    delKeyPressed(enterDelPressed.keyCode);
  });
 }

function addDocHotKeyEvListeners(operations) {
  $(document).keyup((hotKeyPressed) => {
    addHotKeyListeners(hotKeyPressed.keyCode, operations);
  });
}

function addHotKeyListeners(hotKeyCode, operations) {
  if (!$('#itemInput').is(':focus')) {
    hotKeyAPressed(hotKeyCode, operations);
    hotKeyCPressed(hotKeyCode, operations);
    hotKeyVPressed(hotKeyCode, operations);
    hotKeyDPressed(hotKeyCode, operations);
    hotKeySPressed(hotKeyCode, operations);
  }
}

function enterKeyPressed(enterKeyCode, operations) {
  if (enterKeyCode === 13) {
    operations.addElement();
  }
}

function delKeyPressed(delKeyCode) {
  if (delKeyCode === 46) {
    $('#itemInput').val('');
  }
}

function hotKeyAPressed(hotKeyCode, operations) {
  if (hotKeyCode === 65) {
    operations.displayAllItems();
    $('#all').val(true);
  }
}

function hotKeyCPressed(hotKeyCode, operations) {
  if (hotKeyCode === 67) {
    operations.displayCompleteItems();
    $('#complete').val(true);
    }
}

function hotKeyVPressed(hotKeyCode, operations){
  if (hotKeyCode === 86) {
    operations.displayItemsInProgress();
    $('#active').val(true);
   }
}

function hotKeySPressed(hotKeyCode, operations) {
  if (hotKeyCode === 83) {
    operations.setCheckUnCheckAll();
  }
}

function hotKeyDPressed(hotKeyCode, operations) {
  if (hotKeyCode === 68) {
    operations.delCheckEl();
  }
}
