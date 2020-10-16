let questLocation = 0;
function addNewQuest() {
}

let clueId = 0;
function addNewClue() {
    alert('hi');
    if (clueId < 3) {
        var addList = document.getElementById('clue-list');
        var docstyle = addList.style.display;
        if (docstyle == 'none') addList.style.display = '';
        clueId++;

        var text = document.createElement('div');
        text.id = 'additem_' + clueId;
        text.innerHTML = `<div class="md-form"><input type="text" id="clue${clueId}" class="form-control"><label for="${clueId}">Clue${clueId + 1}</label></div>`
        addList.appendChild(text);
    }
}