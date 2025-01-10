const preview = document.querySelector('.preview');
let cardPreview = document.querySelector('.cardPreview');
const upload1 = document.querySelector('.upload1 input[type="file"]');
const textbox1 = document.querySelector('#one');
const textbox2 = document.querySelector('.textbox2');
const textbox3 = document.querySelector('.textbox3');
const tbody = document.getElementsByClassName('tbody');
const submit = document.getElementsByClassName('submit');
let imagesrc = "";
upload1.addEventListener('change', function () {
    const file = upload1.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagesrc = e.target.result;
            console.log(imagesrc)
        };
        reader.readAsDataURL(file);
    }
});
preview.addEventListener('click', function () {
    function ab() {
       
        var list = document.createElement('div');
        const image = document.createElement('img');
        image.classList.add('imagepreview');
        image.src = imagesrc;

        const head = document.createElement('div');
        head.textContent = textbox1.value;

        const date1 = document.createElement('div');
        date1.textContent = textbox2.value;

        const textarea = document.createElement('div');
        textarea.textContent = textbox3.value;

        list.appendChild(image);
        list.appendChild(head);
        list.appendChild(date1);
        list.appendChild(textarea);

        cardPreview.appendChild(list);
        
        
    }
    ab();
   
});
submit[0].addEventListener("click", (e) => {
    e.preventDefault();

    const uploadedImage =upload1.files[0];

    let imageURL = "";
    if (uploadedImage) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imageURL = event.target.result;
            saveData();
        };
        reader.readAsDataURL(uploadedImage);
    } else {
        saveData();
    }
});
const formDataArray = [];

function saveData() {
    const heading = document.getElementById('one').value;
    const rowCount = document.getElementById('tablebody').rows.length + 1;
    const formData = {
        rowCount: rowCount,
        heading: heading
    };

    formDataArray.push(formData);
    add();
   
}

let rowToDelete = null;
let rowToDisplay= null;
 function add() {
  let rowIndex = 0;
  rowIndex++;
    const heading = document.getElementById('one').value;
    let newRow = document.createElement("tr");
    const rowCount = document.getElementById('tablebody').rows.length + 1;
    newRow.innerHTML = `
                 
                        <td>${rowCount}</td>
                        <td id="headingvalue">${heading}</td>
                        <td><img src="./assets-news_card/eye (2).png" alt="" class="view"></td>
                        <td>
                            <img src="./assets-news_card/edit (2).png" alt="" class ="edit" >
                            <img src="./assets-news_card/recycle_bin (2).png" alt="" id="delete">
                        </td>
                 
        `;

    document.getElementById('tablebody').appendChild(newRow);
    document.getElementById('tablebody').appendChild(document.createTextNode(rowIndex));

    addDeleteEvent(newRow.querySelector("#delete"), newRow);
    addViewEvent(newRow.querySelector(".view"), newRow);
    addEditEvent(newRow.querySelector(".edit"), newRow);
    
}
function addEditEvent(button,row){
    button.addEventListener("click", function () {
        rowToEdit = row;
       const popup =  document.createElement('editPopup');
       popup.innerHTML = `<p class="head">Edit News Card</p>
            <p class="editHeading">Heading</p>
            <input type="text" class="textboxes1" id="a" >
            <p class="editDate">Date</p>
            <input type="date" class="textboxes2">
            <p class="editDescription">Description</p>
            <input type="textarea" class="textboxes3"><br>
            <input type="file" class="file"><br>
            <button class="butt">Submit</button>`;
            
            document.querySelector('.main').appendChild(popup);
            document.getElementById('a').value = document.getElementById('one').value;
            document.querySelector('.butt').addEventListener('click',function(){
                document.getElementById('headingvalue').textContent = document.getElementById('a').value ;
            });
        

    });
}
    
    
    
function addViewEvent(button,rowIndex){
button.addEventListener("click", function () {
    
    const list = document.createElement('div');

    const image = document.createElement('img');
    image.classList.add('imagepreview');
    image.src = imagesrc;

    const head = document.createElement('div');
    head.textContent = textbox1.value;

    const date1 = document.createElement('div');
    date1.textContent = textbox2.value;

    const textarea = document.createElement('div');
    textarea.textContent = textbox3.value;

    list.appendChild(image);
    list.appendChild(head);
    list.appendChild(date1);
    list.appendChild(textarea);
    list.appendChild(document.createTextNode(rowIndex));
    document.querySelector('.cards').appendChild(list);
});
}


function addDeleteEvent(button, row) {
    button.addEventListener("click", () => {
        rowToDelete = row; // Store the row to be deleted
        popup.style.display = "flex";
        overlay.style.display = "block";
    });
}


const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopupButton = document.getElementById("close-popup");
const cancelBtn = document.getElementById("cancel-btn");
const confirmDeleteBtn = document.getElementById("confirm-delete");

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.style.display = "none";
});

confirmDeleteBtn.addEventListener("click", () => {
    if (rowToDelete) {
        rowToDelete.remove();
        rowToDelete = null;
    }
    popup.style.display = "none";
    overlay.style.display = "none";
});

//Close modal functionality
const modal = document.querySelector(".modal");
const closeImageModalButton = document.getElementById("close-image-modal");
closeImageModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});





