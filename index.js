const forms = ['mobile app', 'custom hardware', 'hybrid'];
const configurations = ['solo', 'duo', 'multiperson', 'nonhuman'];
const inputs = ['environmental sensors', 'internet data', 'biometrics', 'location ', 'manual controls'];
const outputs = ['visual', 'sonic', 'kinetic', 'haptic', 'informational'];

const formSelect = document.getElementById('formSelect');
const configurationSelect = document.getElementById('configurationSelect');
const inputSelect = document.getElementById('inputSelect');
const outputSelect = document.getElementById('outputSelect');
const randomiseButton = document.getElementById('randomiseButton');

forms.forEach((x) => {
    let option = document.createElement('option');
    option.value = x;
    option.textContent = x;
    formSelect.appendChild(option);
});

configurations.forEach((x) => {
    let option = document.createElement('option');
    option.value = x;
    option.textContent = x;
    configurationSelect.appendChild(option);
});

inputs.forEach((x) => {
    let option = document.createElement('option');
    option.value = x;
    option.textContent = x;
    inputSelect.appendChild(option);
});

outputs.forEach((x) => {
    let option = document.createElement('option');
    option.value = x;
    option.textContent = x;
    outputSelect.appendChild(option);
});


function randomFromList(lst) {
    let idx = Math.floor(Math.random() * lst.length); if (idx >= lst.length) { idx = 0; }
    return lst[idx]
}

function randomiseSelections() {
    formSelect.value = randomFromList(forms);
    configurationSelect.value = randomFromList(configurations);
    inputSelect.value = randomFromList(inputs);
    outputSelect.value = randomFromList(outputs);
}

randomiseButton.addEventListener('click', randomiseSelections);