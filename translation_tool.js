const translationForm = document.getElementById("translationForm");
const textInput = document.getElementById("textInput");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

translationForm.onsubmit = (event) => {
    event.preventDefault();
    output1.textContent = "";
    output2.textContent = "";
    output3.textContent = "";
    output1.textContent = textInput.value
    output2.textContent = textInput.value
    output3.textContent = textInput.value
}