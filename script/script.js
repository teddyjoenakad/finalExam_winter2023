//search button 
const search = document.querySelector('#input');
const button = document.querySelector('#btn');
const section = document.querySelector('section');
const Wishlist = document.querySelector('.wishlist');


// console.log(search);

function searchButton(){
    if(search.value === 'Book' || 'book'){
        section.classList.add('show')
        Wishlist.classList.add('show');
        for (let i = 1; i < 4 + 1; i++) {
            let div = document.createElement('div');
            let span = document.createElement('span');
            let img = document.createElement('img');
            img.src = `Images/Book${i}.png`
            img.height= '200'
            img.width = '200'
            img.alt = `Book ${i}`
            span.appendChild(img);
            div.appendChild(span);
            div.classList.add('wrap');
            section.appendChild(div);
        }
    }
    else{
        alert('Invalid input. Please type book')
    }
    search.value = '';
};

button.addEventListener('click', searchButton);


let emptyArray = [];

let bookWishList = (event) => {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = event.target;
    li.append(event.target);
    ul.appendChild(li);
    Wishlist.appendChild(ul);
    console.log(event.target.);
}

section.addEventListener('click', bookWishList)