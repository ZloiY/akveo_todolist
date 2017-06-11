function checkSearch(e){$(e).find("#check").prop("checked")&&$(e).remove()}function completeItemCheck(){$("#complete").checked&&this.displayCompleteItems()}function setAllItemsFalse(){const e=$("#myList");for(let t of e.children())searchCheckAttr(t,!1)}function setAllItemsTrue(){const e=$("#myList");for(let t of e.children())searchCheckAttr(t,!0)}function searchCheckAttr(e,t){$(e).find("#check").prop("checked",t),t?decreaseActiveItemCounter():increaseActiveItemCounter()}function checkBoxListener(){const e=$("#myList");for(let t of e.children())checkBoxSearch(t)}function checkBoxSearch(e){const t=$(e).find("#check");t.is(":focus")&&(t.prop("checked")?decreaseActiveItemCounter():increaseActiveItemCounter())}function closeBtnListener(){const e=$("#myList").children();for(let t of e)closeItemSearch(t)}function closeItemSearch(e){const t=$(e).find("#check"),s=$(e).find("#closeBtn");$(s).is(":focus")&&($(e).remove(),t.prop("checked")||decreaseActiveItemCounter())}function showItemInProgress(e){const t=$(e).find("#check");t.prop("checked")?visibleCheckInvisListEl(e,t):invisCheckVisListEl(e,t)}function showCompleteItem(e){const t=$(e).find("#check");t.prop("checked")?invisCheckVisListEl(e,t):visibleCheckInvisListEl(e,t)}function invisCheckVisListEl(e,t){$(e).removeClass("task-invisible"),$(t).addClass("task-checkbox-invisible")}function visibleCheckInvisListEl(e,t){$(t).removeClass("task-checkbox-invisible"),$(e).addClass("task-invisible")}function increaseActiveItemCounter(){isNaN(this.activeItems)&&(this.activeItems=0),this.activeItems+=1,setActiveItemsInHTML()}function decreaseActiveItemCounter(){this.activeItems>0&&(this.activeItems-=1),setActiveItemsInHTML()}function setActiveItemsInHTML(){$("#itemsNum").html(this.activeItems)}function createCloseBtn(){const e=document.createElement("input");return e.type="button",e.id="closeBtn",e.value="x",e}function createCheckBox(){const e=document.createElement("input");return e.type="checkbox",e.id="check",e}function taskListAppendChild(e){$(e.newTask).append(e.checkbox),$(e.newTask).append(e.taskName),$(e.newTask).append(e.closeBtn),$(e.newTask).addClass("task-visible"),$("#myList").append(e.newTask)}function radioGroupBtnCheck(e){e.checked||e.prop("checked",!0)}function radioGroupLabelsClicked(e){const t=$("#completeTasks"),s=$("#activeTasks"),c=$("#allTasks");switch(e.prop("id")){case t.prop("id"):t.addClass("radio-btn-label-selected"),s.removeClass("radio-btn-label-selected"),c.removeClass("radio-btn-label-selected");break;case s.prop("id"):t.removeClass("radio-btn-label-selected"),s.addClass("radio-btn-label-selected"),c.removeClass("radio-btn-label-selected");break;case c.prop("id"):t.removeClass("radio-btn-label-selected"),s.removeClass("radio-btn-label-selected"),c.addClass("radio-btn-label-selected")}}class ItemListOperations{constructor(){this.setCheck=!1,this.activeItems=0}addElement(){const e=document.createElement("li"),t=$("#itemInput").val(),s=document.createTextNode(t),c=createCloseBtn(),i=createCheckBox(),n={newTask:e,checkbox:i,taskName:s,closeBtn:c};""!==t?($("#itemInput").val(""),$(i).click(checkBoxListener),$(c).click(closeBtnListener),$(i).addClass("task-checkbox-visible"),$(c).addClass("task-close-btn"),taskListAppendChild(n),increaseActiveItemCounter(),completeItemCheck()):alert("You must write something!")}displayCompleteItems(){const e=$("#complete"),t=$("#completeTasks"),s=$("#myList");radioGroupBtnCheck(e),radioGroupLabelsClicked(t);for(let e of s.children())showCompleteItem(e)}displayAllItems(){const e=$("#all"),t=$("#allTasks"),s=$("#myList");radioGroupBtnCheck(e),radioGroupLabelsClicked(t);for(let e of s.children())$(e).removeClass("task-invisible"),$(e).find("#check").removeClass("task-checkbox-invisible")}displayItemsInProgress(){const e=$("#active"),t=$("#activeTasks"),s=$("#myList");radioGroupBtnCheck(e),radioGroupLabelsClicked(t);for(let e of s.children())showItemInProgress(e)}setCheckUnCheckAll(){this.setCheck?(setAllItemsFalse(),this.setCheck=!1):(setAllItemsTrue(),this.setCheck=!0)}delCheckEl(){const e=$("#myList").children();for(let t of e)checkSearch(t)}}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRpYWxzL1Rhc2tMaXN0T3BlcmF0aW9ucy5qcyJdLCJuYW1lcyI6WyJjaGVja1NlYXJjaCIsIml0ZW0iLCIkIiwiZmluZCIsInByb3AiLCJyZW1vdmUiLCJjb21wbGV0ZUl0ZW1DaGVjayIsImNoZWNrZWQiLCJ0aGlzIiwiZGlzcGxheUNvbXBsZXRlSXRlbXMiLCJzZXRBbGxJdGVtc0ZhbHNlIiwiJGl0ZW1zTGlzdCIsImNoaWxkcmVuIiwic2VhcmNoQ2hlY2tBdHRyIiwic2V0QWxsSXRlbXNUcnVlIiwiY2hlY2tCb3hTdGF0ZSIsImRlY3JlYXNlQWN0aXZlSXRlbUNvdW50ZXIiLCJpbmNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyIiwiY2hlY2tCb3hMaXN0ZW5lciIsIiRpdGVtTGlzdCIsImNoZWNrQm94U2VhcmNoIiwiJGNoZWNrYm94IiwiaXMiLCJjbG9zZUJ0bkxpc3RlbmVyIiwiY2xvc2VJdGVtU2VhcmNoIiwiJGNsb3NlQXR0ciIsInNob3dJdGVtSW5Qcm9ncmVzcyIsIiRjaGVja0F0dHIiLCJ2aXNpYmxlQ2hlY2tJbnZpc0xpc3RFbCIsImludmlzQ2hlY2tWaXNMaXN0RWwiLCJzaG93Q29tcGxldGVJdGVtIiwiYXR0cnMiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaXNOYU4iLCJhY3RpdmVJdGVtcyIsInNldEFjdGl2ZUl0ZW1zSW5IVE1MIiwiaHRtbCIsImNyZWF0ZUNsb3NlQnRuIiwiY2xvc2VCdG4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsImNyZWF0ZUNoZWNrQm94IiwiY2hlY2tCb3giLCJ0YXNrTGlzdEFwcGVuZENoaWxkIiwicGFyYW1zIiwibmV3VGFzayIsImFwcGVuZCIsImNoZWNrYm94IiwidGFza05hbWUiLCJyYWRpb0dyb3VwQnRuQ2hlY2siLCJyYWRpb0J0biIsInJhZGlvR3JvdXBMYWJlbHNDbGlja2VkIiwicmFkaW9Hcm91cExhYmVsIiwiJGNvbXBsZXRlUmFkaW9Hcm91cExhYmVsIiwiJGFjdGl2ZVJhZGlvR3JvdXBMYWJlbCIsIiRhbGxSYWRpb0dyb3VwTGFiZWwiLCJJdGVtTGlzdE9wZXJhdGlvbnMiLCJbb2JqZWN0IE9iamVjdF0iLCJzZXRDaGVjayIsIiRpbnB1dFZhbHVlIiwidmFsIiwiY3JlYXRlVGV4dE5vZGUiLCJuZXdUYXNrT2JqIiwiY2xpY2siLCJhbGVydCIsIiRjb21wbGV0ZVJhZGlvIiwiJGNvbXBsZXRlUmFkaW9MYWJlbCIsIiRhbGxSYWRpbyIsIiRhbGxSYWRpb0xhYmVsIiwiJGFjdGl2ZVJhZGlvIiwiJGFjdGl2ZVJhZGlvTGFiZWwiXSwibWFwcGluZ3MiOiJBQW9GQSxTQUFTQSxZQUFZQyxHQUNEQyxFQUFFRCxHQUFNRSxLQUFLLFVBQ2pCQyxLQUFLLFlBQ2pCRixFQUFFRCxHQUFNSSxTQUlaLFNBQVNDLG9CQUNISixFQUFFLGFBQWFLLFNBQ2pCQyxLQUFLQyx1QkFJVCxTQUFTQyxtQkFDUCxNQUFNQyxFQUFhVCxFQUFFLFdBQ3JCLElBQUssSUFBSUQsS0FBUVUsRUFBV0MsV0FDMUJDLGdCQUFnQlosR0FBTSxHQUkxQixTQUFTYSxrQkFDUCxNQUFNSCxFQUFhVCxFQUFFLFdBQ3JCLElBQUssSUFBSUQsS0FBUVUsRUFBV0MsV0FDMUJDLGdCQUFnQlosR0FBTSxHQUkxQixTQUFTWSxnQkFBZ0JaLEVBQU1jLEdBQzdCYixFQUFFRCxHQUFNRSxLQUFLLFVBQVVDLEtBQUssVUFBV1csR0FDdkNBLEVBQWdCQyw0QkFBOEJDLDRCQUdoRCxTQUFTQyxtQkFDUCxNQUFNQyxFQUFZakIsRUFBRSxXQUNwQixJQUFLLElBQUlELEtBQVFrQixFQUFVUCxXQUN6QlEsZUFBZW5CLEdBSW5CLFNBQVNtQixlQUFlbkIsR0FDdEIsTUFBTW9CLEVBQVluQixFQUFFRCxHQUFNRSxLQUFLLFVBQzNCa0IsRUFBVUMsR0FBRyxZQUNmRCxFQUFVakIsS0FBSyxXQUFhWSw0QkFBOEJDLDZCQUk5RCxTQUFTTSxtQkFDUCxNQUFNWixFQUFhVCxFQUFFLFdBQVdVLFdBQ2hDLElBQUssSUFB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Q2ZYLFlBQVlDIiwiZmlsZSI6InBhcnRpYWxzL1Rhc2tMaXN0T3BlcmF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEl0ZW1MaXN0T3BlcmF0aW9ucyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNldENoZWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLmFjdGl2ZUl0ZW1zID0gMDtcclxuICB9XHJcblxyXG4gIGFkZEVsZW1lbnQoKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0ICRpbnB1dFZhbHVlID0gJCgnI2l0ZW1JbnB1dCcpLnZhbCgpO1xyXG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgkaW5wdXRWYWx1ZSk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUNsb3NlQnRuKCk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUNoZWNrQm94KCk7XHJcbiAgICBjb25zdCBuZXdUYXNrT2JqID0ge1xyXG4gICAgICBuZXdUYXNrLFxyXG4gICAgICBjaGVja2JveCxcclxuICAgICAgdGFza05hbWUsXHJcbiAgICAgIGNsb3NlQnRuLFxyXG4gICAgfTtcclxuICAgIGlmICgkaW5wdXRWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1lvdSBtdXN0IHdyaXRlIHNvbWV0aGluZyEnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgJCgnI2l0ZW1JbnB1dCcpLnZhbCgnJyk7XHJcbiAgICAkKGNoZWNrYm94KS5jbGljayhjaGVja0JveExpc3RlbmVyKTtcclxuICAgICQoY2xvc2VCdG4pLmNsaWNrKGNsb3NlQnRuTGlzdGVuZXIpO1xyXG4gICAgJChjaGVja2JveCkuYWRkQ2xhc3MoJ3Rhc2stY2hlY2tib3gtdmlzaWJsZScpO1xyXG4gICAgJChjbG9zZUJ0bikuYWRkQ2xhc3MoJ3Rhc2stY2xvc2UtYnRuJyk7XHJcbiAgICB0YXNrTGlzdEFwcGVuZENoaWxkKG5ld1Rhc2tPYmopO1xyXG4gICAgaW5jcmVhc2VBY3RpdmVJdGVtQ291bnRlcigpO1xyXG4gICAgY29tcGxldGVJdGVtQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlDb21wbGV0ZUl0ZW1zKCkge1xyXG4gICAgY29uc3QgJGNvbXBsZXRlUmFkaW8gPSAkKCcjY29tcGxldGUnKTtcclxuICAgIGNvbnN0ICRjb21wbGV0ZVJhZGlvTGFiZWwgPSAkKCcjY29tcGxldGVUYXNrcycpO1xyXG4gICAgY29uc3QgJGl0ZW1zTGlzdCA9ICQoJyNteUxpc3QnKTtcclxuICAgIHJhZGlvR3JvdXBCdG5DaGVjaygkY29tcGxldGVSYWRpbyk7XHJcbiAgICByYWRpb0dyb3VwTGFiZWxzQ2xpY2tlZCgkY29tcGxldGVSYWRpb0xhYmVsKTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgJGl0ZW1zTGlzdC5jaGlsZHJlbigpKSB7XHJcbiAgICAgIHNob3dDb21wbGV0ZUl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5QWxsSXRlbXMoKSB7XHJcbiAgICBjb25zdCAkYWxsUmFkaW8gPSAkKCcjYWxsJyk7XHJcbiAgICBjb25zdCAkYWxsUmFkaW9MYWJlbCA9ICQoJyNhbGxUYXNrcycpO1xyXG4gICAgY29uc3QgJGl0ZW1zTGlzdCA9ICQoJyNteUxpc3QnKTtcclxuICAgIHJhZGlvR3JvdXBCdG5DaGVjaygkYWxsUmFkaW8pO1xyXG4gICAgcmFkaW9Hcm91cExhYmVsc0NsaWNrZWQoJGFsbFJhZGlvTGFiZWwpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiAkaXRlbXNMaXN0LmNoaWxkcmVuKCkpIHtcclxuICAgICAgJChpdGVtKS5yZW1vdmVDbGFzcygndGFzay1pbnZpc2libGUnKTtcclxuICAgICAgJChpdGVtKS5maW5kKCcjY2hlY2snKS5yZW1vdmVDbGFzcygndGFzay1jaGVja2JveC1pbnZpc2libGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlJdGVtc0luUHJvZ3Jlc3MoKSB7XHJcbiAgICBjb25zdCAkYWN0aXZlUmFkaW8gPSAkKCcjYWN0aXZlJyk7XHJcbiAgICBjb25zdCAkYWN0aXZlUmFkaW9MYWJlbCA9ICQoJyNhY3RpdmVUYXNrcycpO1xyXG4gICAgY29uc3QgJGl0ZW1zTGlzdCA9ICQoJyNteUxpc3QnKTtcclxuICAgIHJhZGlvR3JvdXBCdG5DaGVjaygkYWN0aXZlUmFkaW8pO1xyXG4gICAgcmFkaW9Hcm91cExhYmVsc0NsaWNrZWQoJGFjdGl2ZVJhZGlvTGFiZWwpO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiAkaXRlbXNMaXN0LmNoaWxkcmVuKCkpIHtcclxuICAgICAgc2hvd0l0ZW1JblByb2dyZXNzKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hlY2tVbkNoZWNrQWxsKCkge1xyXG4gICAgaWYgKCF0aGlzLnNldENoZWNrKSB7XHJcbiAgICAgIHNldEFsbEl0ZW1zVHJ1ZSgpO1xyXG4gICAgICB0aGlzLnNldENoZWNrID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEFsbEl0ZW1zRmFsc2UoKTtcclxuICAgICAgdGhpcy5zZXRDaGVjayA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsQ2hlY2tFbCgpIHtcclxuICAgIGNvbnN0ICRpdGVtc0xpc3QgPSAkKCcjbXlMaXN0JykuY2hpbGRyZW4oKTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgJGl0ZW1zTGlzdCkge1xyXG4gICAgICBjaGVja1NlYXJjaChpdGVtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrU2VhcmNoKGl0ZW0pIHtcclxuICBjb25zdCAkY2hlY2tib3ggPSAkKGl0ZW0pLmZpbmQoJyNjaGVjaycpO1xyXG4gIGlmICgkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAkKGl0ZW0pLnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcGxldGVJdGVtQ2hlY2soKSB7XHJcbiAgaWYgKCQoJyNjb21wbGV0ZScpLmNoZWNrZWQpIHtcclxuICAgIHRoaXMuZGlzcGxheUNvbXBsZXRlSXRlbXMoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFsbEl0ZW1zRmFsc2UoKSB7XHJcbiAgY29uc3QgJGl0ZW1zTGlzdCA9ICQoJyNteUxpc3QnKTtcclxuICBmb3IgKGxldCBpdGVtIG9mICRpdGVtc0xpc3QuY2hpbGRyZW4oKSkge1xyXG4gICAgc2VhcmNoQ2hlY2tBdHRyKGl0ZW0sIGZhbHNlKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEFsbEl0ZW1zVHJ1ZSgpIHtcclxuICBjb25zdCAkaXRlbXNMaXN0ID0gJCgnI215TGlzdCcpO1xyXG4gIGZvciAobGV0IGl0ZW0gb2YgJGl0ZW1zTGlzdC5jaGlsZHJlbigpKSB7XHJcbiAgICBzZWFyY2hDaGVja0F0dHIoaXRlbSwgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWFyY2hDaGVja0F0dHIoaXRlbSwgY2hlY2tCb3hTdGF0ZSkge1xyXG4gICQoaXRlbSkuZmluZCgnI2NoZWNrJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrQm94U3RhdGUpO1xyXG4gIGNoZWNrQm94U3RhdGUgPyBkZWNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCkgOiBpbmNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQm94TGlzdGVuZXIoKSB7XHJcbiAgY29uc3QgJGl0ZW1MaXN0ID0gJCgnI215TGlzdCcpO1xyXG4gIGZvciAobGV0IGl0ZW0gb2YgJGl0ZW1MaXN0LmNoaWxkcmVuKCkpIHtcclxuICAgIGNoZWNrQm94U2VhcmNoKGl0ZW0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tCb3hTZWFyY2goaXRlbSkge1xyXG4gIGNvbnN0ICRjaGVja2JveCA9ICQoaXRlbSkuZmluZCgnI2NoZWNrJyk7XHJcbiAgaWYgKCRjaGVja2JveC5pcygnOmZvY3VzJykpIHtcclxuICAgICRjaGVja2JveC5wcm9wKCdjaGVja2VkJykgPyBkZWNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCkgOiBpbmNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUJ0bkxpc3RlbmVyKCkge1xyXG4gIGNvbnN0ICRpdGVtc0xpc3QgPSAkKCcjbXlMaXN0JykuY2hpbGRyZW4oKTtcclxuICBmb3IgKGxldCBpdGVtIG9mICRpdGVtc0xpc3QpIHtcclxuICAgIGNsb3NlSXRlbVNlYXJjaChpdGVtKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlSXRlbVNlYXJjaChpdGVtKSB7XHJcbiAgY29uc3QgJGNoZWNrYm94ID0gJChpdGVtKS5maW5kKCcjY2hlY2snKTtcclxuICBjb25zdCAkY2xvc2VBdHRyID0gJChpdGVtKS5maW5kKCcjY2xvc2VCdG4nKTtcclxuICBpZiAoJCgkY2xvc2VBdHRyKS5pcygnOmZvY3VzJykpIHtcclxuICAgICQoaXRlbSkucmVtb3ZlKCk7XHJcbiAgICAkY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpID8gMCA6IGRlY3JlYXNlQWN0aXZlSXRlbUNvdW50ZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtSW5Qcm9ncmVzcyhpdGVtKSB7XHJcbiAgY29uc3QgJGNoZWNrQXR0ciA9ICQoaXRlbSkuZmluZCgnI2NoZWNrJyk7XHJcbiAgJGNoZWNrQXR0ci5wcm9wKCdjaGVja2VkJykgPyB2aXNpYmxlQ2hlY2tJbnZpc0xpc3RFbChpdGVtLCAkY2hlY2tBdHRyKSA6IGludmlzQ2hlY2tWaXNMaXN0RWwoaXRlbSwgJGNoZWNrQXR0cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb21wbGV0ZUl0ZW0oaXRlbSkge1xyXG4gIGNvbnN0ICRjaGVja0F0dHIgPSAkKGl0ZW0pLmZpbmQoJyNjaGVjaycpO1xyXG4gICRjaGVja0F0dHIucHJvcCgnY2hlY2tlZCcpID8gaW52aXNDaGVja1Zpc0xpc3RFbChpdGVtLCAkY2hlY2tBdHRyKSA6IHZpc2libGVDaGVja0ludmlzTGlzdEVsKGl0ZW0sICRjaGVja0F0dHIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZpc0NoZWNrVmlzTGlzdEVsKGl0ZW0sIGF0dHJzKSB7XHJcbiAgJChpdGVtKS5yZW1vdmVDbGFzcygndGFzay1pbnZpc2libGUnKTtcclxuICAkKGF0dHJzKS5hZGRDbGFzcygndGFzay1jaGVja2JveC1pbnZpc2libGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmlzaWJsZUNoZWNrSW52aXNMaXN0RWwoaXRlbSwgYXR0cnMpIHtcclxuICAkKGF0dHJzKS5yZW1vdmVDbGFzcygndGFzay1jaGVja2JveC1pbnZpc2libGUnKTtcclxuICAkKGl0ZW0pLmFkZENsYXNzKCd0YXNrLWludmlzaWJsZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCkge1xyXG4gIGlmIChpc05hTih0aGlzLmFjdGl2ZUl0ZW1zKSkge1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtcyA9IDA7XHJcbiAgfVxyXG4gIHRoaXMuYWN0aXZlSXRlbXMgKz0gMTtcclxuICBzZXRBY3RpdmVJdGVtc0luSFRNTCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyZWFzZUFjdGl2ZUl0ZW1Db3VudGVyKCkge1xyXG4gIGlmICh0aGlzLmFjdGl2ZUl0ZW1zID4gMCkge1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtcyAtPSAxO1xyXG4gIH1cclxuICBzZXRBY3RpdmVJdGVtc0luSFRNTCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRBY3RpdmVJdGVtc0luSFRNTCgpIHtcclxuICAkKCcjaXRlbXNOdW0nKS5odG1sKHRoaXMuYWN0aXZlSXRlbXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDbG9zZUJ0bigpIHtcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2xvc2VCdG4udHlwZSA9ICdidXR0b24nO1xyXG4gIGNsb3NlQnRuLmlkID0gJ2Nsb3NlQnRuJztcclxuICBjbG9zZUJ0bi52YWx1ZSA9ICd4JztcclxuICByZXR1cm4gY2xvc2VCdG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCkge1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja0JveC5pZCA9ICdjaGVjayc7XHJcbiAgcmV0dXJuIGNoZWNrQm94O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0YXNrTGlzdEFwcGVuZENoaWxkKHBhcmFtcykge1xyXG4gICQocGFyYW1zLm5ld1Rhc2spLmFwcGVuZChwYXJhbXMuY2hlY2tib3gpO1xyXG4gICQocGFyYW1zLm5ld1Rhc2spLmFwcGVuZChwYXJhbXMudGFza05hbWUpO1xyXG4gICQocGFyYW1zLm5ld1Rhc2spLmFwcGVuZChwYXJhbXMuY2xvc2VCdG4pO1xyXG4gICQocGFyYW1zLm5ld1Rhc2spLmFkZENsYXNzKCd0YXNrLXZpc2libGUnKTtcclxuICAkKCcjbXlMaXN0JykuYXBwZW5kKHBhcmFtcy5uZXdUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFkaW9Hcm91cEJ0bkNoZWNrKHJhZGlvQnRuKSB7XHJcbiAgaWYgKCFyYWRpb0J0bi5jaGVja2VkKSB7XHJcbiAgICByYWRpb0J0bi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYWRpb0dyb3VwTGFiZWxzQ2xpY2tlZChyYWRpb0dyb3VwTGFiZWwpIHtcclxuICBjb25zdCAkY29tcGxldGVSYWRpb0dyb3VwTGFiZWwgPSAkKCcjY29tcGxldGVUYXNrcycpO1xyXG4gIGNvbnN0ICRhY3RpdmVSYWRpb0dyb3VwTGFiZWwgPSAkKCcjYWN0aXZlVGFza3MnKTtcclxuICBjb25zdCAkYWxsUmFkaW9Hcm91cExhYmVsID0gJCgnI2FsbFRhc2tzJyk7XHJcbiAgc3dpdGNoIChyYWRpb0dyb3VwTGFiZWwucHJvcCgnaWQnKSkge1xyXG4gICAgY2FzZSAkY29tcGxldGVSYWRpb0dyb3VwTGFiZWwucHJvcCgnaWQnKToge1xyXG4gICAgICAkY29tcGxldGVSYWRpb0dyb3VwTGFiZWwuYWRkQ2xhc3MoJ3JhZGlvLWJ0bi1sYWJlbC1zZWxlY3RlZCcpO1xyXG4gICAgICAkYWN0aXZlUmFkaW9Hcm91cExhYmVsLnJlbW92ZUNsYXNzKCdyYWRpby1idG4tbGFiZWwtc2VsZWN0ZWQnKTtcclxuICAgICAgJGFsbFJhZGlvR3JvdXBMYWJlbC5yZW1vdmVDbGFzcygncmFkaW8tYnRuLWxhYmVsLXNlbGVjdGVkJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAkYWN0aXZlUmFkaW9Hcm91cExhYmVsLnByb3AoJ2lkJyk6IHtcclxuICAgICAgJGNvbXBsZXRlUmFkaW9Hcm91cExhYmVsLnJlbW92ZUNsYXNzKCdyYWRpby1idG4tbGFiZWwtc2VsZWN0ZWQnKTtcclxuICAgICAgJGFjdGl2ZVJhZGlvR3JvdXBMYWJlbC5hZGRDbGFzcygncmFkaW8tYnRuLWxhYmVsLXNlbGVjdGVkJyk7XHJcbiAgICAgICRhbGxSYWRpb0dyb3VwTGFiZWwucmVtb3ZlQ2xhc3MoJ3JhZGlvLWJ0bi1sYWJlbC1zZWxlY3RlZCcpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJGFsbFJhZGlvR3JvdXBMYWJlbC5wcm9wKCdpZCcpOiB7XHJcbiAgICAgICRjb21wbGV0ZVJhZGlvR3JvdXBMYWJlbC5yZW1vdmVDbGFzcygncmFkaW8tYnRuLWxhYmVsLXNlbGVjdGVkJyk7XHJcbiAgICAgICRhY3RpdmVSYWRpb0dyb3VwTGFiZWwucmVtb3ZlQ2xhc3MoJ3JhZGlvLWJ0bi1sYWJlbC1zZWxlY3RlZCcpO1xyXG4gICAgICAkYWxsUmFkaW9Hcm91cExhYmVsLmFkZENsYXNzKCdyYWRpby1idG4tbGFiZWwtc2VsZWN0ZWQnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==
