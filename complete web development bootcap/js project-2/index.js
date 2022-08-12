console.log("this is index.js")
//constructor
function Book(name,author,type) {
    this.name = name;
    this.author = author;
    this.type = type;   
}

//display constructor
function Display(){

}
//add method to display pr0totype
Display.prototype.add =function(book){
    console.log("adding")
    let tableBody = document.getElementById('tableBody');
    let uiString =` 
                     <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `
    tableBody.innerHTML += uiString;
}
//implement clear function
Display.prototype.clear =function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
//implement validate function
Display.prototype.validate = function(book){
    if  (book.name.length<2 || book.author.length<2){

        return false;
    } 
    else{
         return true;
    }
}
Display.prototype.show = function(type , displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message!</strong>${displayMessage}
  
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
    
    `
    setTimeout(function() {
        message.innerHTML = ''
        
    }, 5000);

}




//add submit event listener to form
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
  
     console.log("you have submitted library form");
     let name = document.getElementById('bookName').value;
     let author= document.getElementById('author').value;
     let type;
 
     let fiction = document.getElementById('fiction');
     let programming= document.getElementById('Programming');
     let cooking = document.getElementById('Cooking');
   
 
     
    
    if(fiction.checked){
        type = fiction.value;
    }
    
    else if(programming.checked){
        type = programming.value;
    }
    
    else if(cooking.checked){
        type = cooking.value;
    }
    
    let book = new Book(name,author,type)
    let display = new Display();

     if(display.validate(book)){

          display.add(book);
          display.clear();
          display.show('success' ,'your book has been successfully added');
     }
     else{
        //show error
          display.show('danger' , 'sorry you can not add this book');
     }
  
    
    
    
    //console.log(book);
 

    
   e.preventDefault();
   
}