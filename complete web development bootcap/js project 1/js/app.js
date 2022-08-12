console.log("project 1")
showNotes();
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");//age theke localstorage e text thkte pre
    if (notes == null) {
        notesobj = [];
    }
    else {
        //jodi string kono pawajai take parse koro
        //note gula kintu array te store hobe
        notesobj = JSON.parse(notes);

    }
    //btn e clk korle notes update hobe
    notesobj.push(addTxt.value)
    //local storage abr blank dekhabe update r por, r stringyfy korte hobe bcz string e cnvt kora lage bcz localstrage string e kaj kore 
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addTxt.value = "";
    //console.log(notesobj);
    showNotes();


})
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        //jodi string kono pawajai take parse koro
        //note gula kintu array te store hobe
        notesobj = JSON.parse(notes);

    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Note${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete</button> 
            </div>
          </div>
         `
    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show Use "Add a note" section to add note`;
    }

}

function deleteNote(index) {
    //console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesobj = [];
    }
    else {
        //jodi string kono pawajai take parse koro
        //note gula kintu array te store hobe
        notesobj = JSON.parse(notes);

    }
    //local storage theke remove hoye jabe 1 ta element
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();

}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
   // console.log("input event fired!", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
      
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
          element.style.display ="block";
        }
        else{
            element.style.display ="none";
        }
        //console.log(cardTxt);
    })
})
