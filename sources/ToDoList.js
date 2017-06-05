window.addEventListener('load', (loadEvent) => {
    ToDoList.main();
});

class ToDoList{

    static main(){
        const addBtn = document.getElementById('addBtn');
        const allRadio = document.getElementById('all');
        const completeRadio = document.getElementById('complete');
        const activeRadio = document.getElementById('active');
        const checkUncheckBtn = document.getElementById('checkUncheck');
        const delCheckedBtn = document.getElementById('delBtn');
        const itemsNum = document.getElementById('itemsNum');
        const inputField = document.getElementById('itemInput');
        const operations = new ItemListOperations();
        this.addBtnsFieldEvListeners(operations, addBtn, allRadio, completeRadio, activeRadio, checkUncheckBtn, delCheckedBtn);
        this.addDocHotKeyEvListeners(operations, allRadio, completeRadio, activeRadio, inputField);
        this.addInputFieldEvListener(inputField, operations);
    }

    static addBtnsFieldEvListeners(operations, addBtn, allRadio, completeRadio, activeRadio, checkUncheckBtn, delCheckedBtn){
        addBtn.addEventListener('click', operations.addElement, false);
        allRadio.addEventListener('click', operations.displayAllItems, false);
        completeRadio.addEventListener('click', operations.displayCompleteItems, false);
        activeRadio.addEventListener('click', operations.displayItemsInProgress, false);
        checkUncheckBtn.addEventListener('click', operations.setCheckUnCheckAll, false);
        delCheckedBtn.addEventListener('click', operations.delCheckEl, false);
    }

    static addInputFieldEvListener(inputField, operations){
        inputField.addEventListener('keyup', (enterDelPressed) => {
            this.enterKeyPressed(enterDelPressed.keyCode, operations);
            this.delKeyPressed(enterDelPressed.keyCode, operations);
        });
    }

    static addDocHotKeyEvListeners(operations, allRadio, completeRadio, activeRadio, inputField){
        document.addEventListener('keyup', (hotKeyPressed) => {
            this.addHotKeyListners(hotKeyPressed.keyCode, operations, allRadio, completeRadio, activeRadio, inputField)
        });
    }

    static addHotKeyListners(hotKeyCode, operations, allRadio, completeRadio, activeRadio, inputField){
        if (document.activeElement !== inputField) {
            this.hotKeyAPressed(hotKeyCode, operations, allRadio);
            this.hotKeyCPressed(hotKeyCode, operations, completeRadio);
            this.hotKeyVPressed(hotKeyCode, operations, activeRadio);
            this.hotKeyDPressed(hotKeyCode, operations);
            this.hotKeySPressed(hotKeyCode, operations);
        }
    }

    static enterKeyPressed(enterKeyCode, operations){
        if (enterKeyCode === 13) operations.addElement();
    }

    static delKeyPressed(delKeyCode, inputField){
        if (delKeyCode === 46) inputField.value = '';
    }

    static hotKeyAPressed(hotKeyCode, operations, radioBtn){
        if (hotKeyCode === 65){
            operations.displayAllItems();
            radioBtn.checked = true;
        }
    }

    static hotKeyCPressed(hotKeyCode, operations, radioBtn){
        if (hotKeyCode === 67){
            operations.displayCompleteItems();
            radioBtn.checked = true;
        }
    }

    static hotKeyVPressed(hotKeyCode, operations, radioBtn){
        if (hotKeyCode === 86){
            operations.displayItemsInProgress();
            radioBtn.checked = true;
        }
    }

    static hotKeySPressed(hotKeyCode, operations){
        if (hotKeyCode === 83) operations.setCheckUnCheckAll();
    }

    static hotKeyDPressed(hotKeyCode, operations){
        if (hotKeyCode === 68) operations.delCheckEl();
    }
}