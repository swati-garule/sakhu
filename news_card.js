const preview = document.querySelector('.preview');
const cardPreview = document.querySelector('.cardPreview');
const upload1 = document.querySelector('.upload1');
const textbox1 = document.querySelector('#one');
const textbox2 = document.querySelector('.textbox2');
const textbox3 = document.querySelector('.textbox3');
const tbody = document.getElementsByClassName('tbody');
const submit = document.getElementsByClassName('submit');



preview.addEventListener('click', function () {
    const list = document.createElement('div');

    const image = document.createElement('img');
    image.classList.add('imagepreview');


const imagepreview = document.querySelector('.imagepreview');
      upload1.addEventListener('click' , function(){
        const file = upload1.file;
        if(file){
            const reader = new FileReader();
            reader.onload = function(){
                imagepreview.src =upload1.file;
                imagepreview.classList.add('abc');

                
            };
            reader.readAsDataURL(file);
        }
      });
    
  
      



    const head = document.createElement('head1');
    head.textContent = textbox1.value;

    const date1 = document.createElement('dates');
    date1.textContent = textbox2.value;

    const textarea = document.createElement('textarea');
    textarea.textContent = textbox3.value;

    list.appendChild(image);
    list.appendChild(head);
    list.appendChild(date1);
    list.appendChild(textarea);

    cardPreview.appendChild(list);

});


submit[0].addEventListener('click', function () {
    const row = document.createElement('tr');

    row.classList.add('theadrows');


    let count = 0;
    const col1 = document.createElement('td');
    col1.classList.add('rowcol1');
    col1.textContent = `${count++}`;
    row.appendChild(col1)

    const col2 = document.createElement('td');
    col2.classList.add('row1');
    col2.textContent = textbox1.value;
    row.appendChild(col2);

    const eye = document.createElement('img');
    eye.classList.add('eyeicon');
    eye.src = './assets-news_card/edit.png';
    row.appendChild(eye);

    const edit = document.createElement('img');
    edit.classList.add('editicon');
    edit.src = './assets-news_card/edit (2).png';
    row.appendChild(edit);

    const deleteimage = document.createElement('img');
    deleteimage.classList.add('deleteicon');
    deleteimage.src = './assets-news_card/recycle_bin (2).png';
    row.appendChild(deleteimage);


    tbody[0].appendChild(row);

});
document.querySelector('.eyeicon').addEventListener('click' , function(){
    console.log('hello');
});



