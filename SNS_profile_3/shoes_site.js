function checkOnlyOne(element) {

    const checkboxes
        = document.getElementsByName("size");

    checkboxes.forEach((cb) => {
        cb.checked = false;
    })

    element.checked = true;
}

//https://hianna.tistory.com/434