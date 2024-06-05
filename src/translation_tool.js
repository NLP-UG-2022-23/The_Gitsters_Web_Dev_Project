const translationForm = document.getElementById("translationForm");
const textInput = document.getElementById("textInput");
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

function fetchFromFirst(strToTranslate, textToTranslate, targetLanguage, inputLanguage){
    
    const apiKeyDeepL = 'a19cb280-568f-4a3d-8db0-1f1c1d18ae76:fx';
    const url = `https://api-free.deepl.com/v2/translate?auth_key=${apiKeyDeepL}&text=${encodeURIComponent(textToTranslate)}&target_lang=${targetLanguage}`;
    
    let lectiAILanguage = inputLanguage.toLowerCase()
    console.log(lectiAILanguage)

    fetch("https://api.lecto.ai/v1/translate/text",{
        method: "POST",
        body: JSON.stringify({
            "texts": [strToTranslate],
            "to": [targetLanguage],
            "from": lectiAILanguage
        }),
        headers: {
            "X-API-Key": "NZZSYXX-4YGMDP3-J4JKSF7-5SK35F6",
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
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const translatedText = data.translations[0].text;
        output2.innerText = translatedText;
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Problem fetching from DeepL!");
    });

    let lingvaTargetLanguage = `${targetLanguage.toLowerCase()}_${targetLanguage}`

    let lingvaInputLanguage = 'en_GB'

    if (inputLanguage != "EN"){
        lingvaInputLanguage = `${inputLanguage.toLowerCase()}_${inputLanguage}`
    }

    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json', Authorization: 'a_TPRlbEUxkZiSAJiDtHWQk8rmUf4CuxSZPvGaBpvZOVXhF3pC69QVhpcGFx4Fzfcw6wnlmFffK0aBdiFM'},
        body: JSON.stringify({
          from: lingvaInputLanguage,
          to: lingvaTargetLanguage,
          data: strToTranslate,
          platform: 'api'
        })
      };
      
      fetch('https://api-b2b.backenster.com/b1/api/v3/translate', options)
        .then(response => response.json())
        .then(response => {
            output3.innerText = response.result;
        })
        .catch(err => console.error(err));
}


translationForm.onsubmit = (event) => {
    event.preventDefault();

    const textToTranslate = textInput.value;
    const targetLanguage = document.getElementById('languageSelect').value;
    const inputLanguage = document.getElementById('inputLanguageSelect').value;

    fetchFromFirst(textInput.value, textToTranslate, targetLanguage, inputLanguage);

    output1.textContent = "";
    output2.textContent = "";
    output3.textContent = "";
}