function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  .then(json => renderBooks(json[4])
  );
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h3 = document.createElement('h3')
    h3.innerHTML = `<h3>${book.name}</h3>`
    main.appendChild(h3)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  rederBooks();
})
