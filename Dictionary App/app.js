console.log("welcome ")

const resultDiv = document.querySelector(".result")
const h1elm = document.querySelector(".word")
const phonetics = document.querySelector(".phonetics")
const audio = document.querySelector("audio")
// const wordmeaning = document.querySelector("wordmeaning")
const wordmeaning = document.querySelector(".word-defination")
const synonyms = document.querySelector(".synonyms")
const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"


const handle= async (e)=>{
    if(e.keyCode == 13){
//make a req to the api
const word = e.target.value;

const result = await fetch(api + word)
 if (!result.ok){
     alert("no defination found");
     return;
 }
const data = await result.json();
resultDiv.style.display = "block";
h1elm.innerText = data[0].word;
phonetics.innerText = data[0].phonetics[0].  text;
audio.src = data[0].phonetics[0].audio;
wordmeaning.innerText= data[0].meanings[0].definitions[0].definition;


const syononymsArray = data[0].meanings[0].definitions[0].synonyms;
if(syononymsArray){

    let syndata ="";
 for(let i = 0; i<syononymsArray.length;i++){
     syndata += `<p class="pills">${syononymsArray[i]}</p>`
 }

 synonyms.innerHTML = syndata;

}
else{
    synonyms.innerHTML ='<p class="pills">No synonyms avaliable<p/>';
}

 }
}
