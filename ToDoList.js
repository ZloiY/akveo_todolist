window.onload = f => {ToDoList.main()};

class ToDoList{
    static main(){
        this.setCheck = false;
        let addBtn = document.getElementById('addBtn');
        let allRadio = document.getElementById('all');
        let completeRadio = document.getElementById('complete');
        let activeRadio = document.getElementById('active');
        let checkUncheckBtn = document.getElementById('checkUncheck');
        let delCheckedBtn = document.getElementById('delBtn');
        let itemsNum = document.getElementById('itemsNum');
        let operations = new ItemListOperations();
        addBtn.addEventListener('click', operations.addElement, false);
        allRadio.addEventListener('click', operations.displayAllItems, false);
        completeRadio.addEventListener('click', operations.displayCompleteItems, false);
        activeRadio.addEventListener('click', operations.displayItemsInProgress, false);
        checkUncheckBtn.addEventListener('click', operations.setCheckUnCheckAll, false);
        delCheckedBtn.addEventListener('click', operations.delCheckEl, false);
    }
}
