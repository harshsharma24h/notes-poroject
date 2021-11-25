// we use array in this program we store the data in "LOCALSTORAGE"


console.log("welcome to check it's working")

// this "showNotes()" line is we put here to display all the existing notes
showNotes();
// if user adds a note and then it well be add in localstorage 
// here bwe use  event listeiner







// here this code is add note in the localstorage by note add button

// this below line is to select the button in the html
let addBtn = document.getElementById('addBtn');//we selected the button

// this line will sense the action on click and it will run this function
addBtn.addEventListener("click", function (e) {

// this function

// this line is use to track that user is typing something and that will store in  the "addTxt"
    let addTxt = document.getElementById('addText');
    // this line is use to store the item in the localstorage by using ".getItem() "function and the item is stored in the "notes"   !note:,getItem() is to add Item the localstorage 
    let notes = localStorage.getItem("notes");

    // this is the condition to store item

    // this line means that if notes is null then create an veriable "notesObj" which is an array to store many items in a single variable
    if (notes == null) {
        notesObj = [];
    }
    // this line means if the notesObj is not null then is a srting or a number so we have convert it into it an object because object can store both number and string so we have convert it into an object so we use JSON.parse() function to convert in into an object
    else {
        notesObj = JSON.parse(notes);
    }

    // this line is use to push or add new element in the localStorage to store notes 
    // .push () is use to add new elements in the object 
    notesObj.push(addTxt.value);

    // this line is use to update the localstorage by using .setItem() its simple over writing the object when user add any note and add that element in the object and after adding that item we use "JSON.stringfy" to convert the object into string bacause it show it on the string bacause object can't be show in webpage so that we convert it into the string by using stringfy function
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();

})








//  here this code is to show all the notes on the screen which are stored in the localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick=deleteNote(this.id) >delete me</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById(`notes`);
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML=`nothing to show here`
    }
}








// code or function to delete note

function deleteNote(index){
    console.log("i am deleting this note",index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    
    
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes()
    
}






// this of program is for seacrch any note from the search bar

let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
   let inputVal= search.value;
  console.log("yes search is working",inputVal);

    let noteCard= document.getElementsByClassName('noteCard')
Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTxt)
       if(cardTxt.includes(inputVal)){
           element.style.display="block";
       }
       else{
        element.style.display="none";
       }
    })
   
})