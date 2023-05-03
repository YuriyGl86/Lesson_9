const checkbox = document.querySelectorAll('.interest__check')

Array.from(checkbox).forEach(elem => elem.addEventListener('change', checkboxHandler))

function checkboxHandler(event){
    // console.log(event.target.checked)
    const checkboxChildren = event.target.closest('label').nextElementSibling
    if(checkboxChildren){
        // console.log('есть дети')
        const childrenList = Array.from(checkboxChildren.querySelectorAll('.interest__check'))
        childrenList.forEach(elem => {
            elem.checked = event.target.checked
            elem.indeterminate = false
        })
    }
    checkForAllCheckboxIsChecked(event.target)

}

function checkForAllCheckboxIsChecked(elem){
    const parentUl = elem.parentElement.closest('ul.interests')
    // console.log(parentUl)
    if(!parentUl){ 
        // console.log('попали сюда')
        return false};

    const parentCheckbox = parentUl.previousElementSibling.querySelector('input.interest__check')
    const ChildList = Array.from(parentUl.querySelectorAll('input.interest__check'))
    const ChildListChecked = ChildList.filter(elem => elem.checked)

    console.log(ChildList.length)
    console.log(ChildListChecked.length)

    if(ChildList.length == ChildListChecked.length){
        parentCheckbox.indeterminate = false
        parentCheckbox.checked = true
    } else if(ChildListChecked.length == 0){
        parentCheckbox.indeterminate = false
        parentCheckbox.checked = false
    } else {parentCheckbox.indeterminate = true}

    checkForAllCheckboxIsChecked(parentUl)

}