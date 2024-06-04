const translationForm = document.getElementById("translationForm");
const textInput = document.getElementById("textInput");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

function fetchFromFirst(strToTranslate){
    fetch("https://api.lecto.ai/v1/translate/text",{
        method: "POST",
        body: JSON.stringify({
            "texts": [strToTranslate],
            "to": ["pl"],
            "from": "en"
        }),
        headers: {
            "X-API-Key": "GVNZATH-J1T4QAZ-KD4N46N-14NN783",
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
    }).then((val) => {
        val.json().then((resp)=>{
            output1.innerText = resp.translations[0].translated[0];
        })
    }).catch((error) => {
        console.log(error);
        alert("Problem fetching from first!");
    });
}

translationForm.onsubmit = (event) => {
    event.preventDefault();

    fetchFromFirst(textInput.value);

    output1.textContent = "";
    output2.textContent = "";
    output3.textContent = "";
    output2.textContent = textInput.value
    output3.textContent = textInput.value
}