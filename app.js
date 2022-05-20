// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'Ademola Adebayo',
        isbn: '3434434'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: '45545'
      }
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
   static clearFields() {
     document.querySelector('#title').value = '';
     document.querySelector('#author').value = '';
     document.querySelector('#isbn').value = '';
   }
}

// Store Class: Handles Storage

// Event: Dispaly Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {


// Prevent default submit
  e.preventDefault();
    //   Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
// Validate
if(title) {}
//   instantiate book
  const book = new Book(title, author, isbn);
  
// Add Book to UI
UI.addBookToList(book);

// Clear fields
UI.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
});