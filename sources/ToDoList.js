window.onload = onloadEvent => {ToDoList.main()};

class ToDoList{
    static main(){
        this.setCheck = false;
        const addBtn = document.getElementById('addBtn');
        const allRadio = document.getElementById('all');
        const completeRadio = document.getElementById('complete');
        const activeRadio = document.getElementById('active');
        const checkUncheckBtn = document.getElementById('checkUncheck');
        const delCheckedBtn = document.getElementById('delBtn');
        const itemsNum = document.getElementById('itemsNum');
        const inputField = document.getElementById('itemInput');
        let operations = new ItemListOperations();
        addBtn.addEventListener('click', operations.addElement, false);
        allRadio.addEventListener('click', operations.displayAllItems, false);
        completeRadio.addEventListener('click', operations.displayCompleteItems, false);
        activeRadio.addEventListener('click', operations.displayItemsInProgress, false);
        checkUncheckBtn.addEventListener('click', operations.setCheckUnCheckAll, false);
        delCheckedBtn.addEventListener('click', operations.delCheckEl, false);
        inputField.onkeyup = enterDelPressed => {
            if (enterDelPressed.keyCode === 13)  // press ENTER to add item
                operations.addElement();
            if (enterDelPressed.keyCode === 46) // press Del to clear input field
                inputField.value = '';
        };
        document.onkeyup = hotKeyPressed => {
            if (document.activeElement !== inputField) // hot keys below will work if input field  wouldn't  be selected
                switch (hotKeyPressed.keyCode){
                    case 65:{                                   //press A to display all items
                        operations.displayAllItems();
                        allRadio.checked = true;
                        break;
                    }
                    case 67:{                                 // press C to display complete items
                        operations.displayCompleteItems();
                        completeRadio.checked = true;
                        break;
                    }
                    case 86:{                               // press V to display active items
                        operations.displayItemsInProgress();
                        activeRadio.checked = true;
                        break;
                    }
                    case 83:{                              // press S to check/uncheck all items
                        operations.setCheckUnCheckAll();
                        break;
                    }
                    case 68:{                            // press D to delete all checked items
                        operations.delCheckEl();
                        break;
                    }
                }
        }
    }
}
