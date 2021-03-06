import authorInfo from '../components/authorInfo';
import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import editBookForm from '../components/forms/editBookForm';
import formModal from '../components/forms/formModal';
import { authorBookInfo, deleteAuthorBooks } from '../helpers/data/authorBooksData';
import {
  createBook,
  deleteBook,
  getSingleBook,
  updateBook
} from '../helpers/data/bookData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBook(firebaseKey, uid).then((booksArray) => showBooks(booksArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
        uid
      };

      createBook(bookObject, uid).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Book');
      getSingleBook(firebaseKey).then((bookObject) => editBookForm(bookObject));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#author').value,
      };

      updateBook(firebaseKey, bookObject).then((booksArray) => showBooks(booksArray));

      $('#formModal').modal('toggle');
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      if (window.confirm('Want to delete?')) {
        const authorId = e.target.id.split('--')[1];
        console.warn(authorId);
        deleteAuthorBooks(authorId, uid).then((authorsArray) => showAuthors(authorsArray));
      }
    }

    if (e.target.includes('author-name-title')) {
      const authorId = e.target.id.split('--')[1];
      authorBookInfo(authorId).then((authorInfoObject) => {
        authorInfo(authorInfoObject.author);
        showBooks(authorInfoObject.books);
      });
    }

    if (e.target.id.includes('author-name-title')) {
      const authorId = e.target.id.split('--')[1];
      authorBookInfo(authorId).then((authorInfoObject) => {
        showBooks(authorInfoObject.books);
        authorInfo(authorInfoObject.author);
      });
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('add-author-btn')) {
    //   console.warn('CLICKED ADD AUTHOR BUTTON', e.target.id);
    //   addAuthorForm();
    // }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    // if (e.target.id.includes('submit-author')) {
    //   console.warn('CLICKED SUBMIT AUTHOR BUTTON', e.target.id);
    //   e.preventDefault();
    //   const authorObject = {
    //     first_name: document.querySelector('#author-first-name').value,
    //     last_name: document.querySelector('#author-last-name').value,
    //     uid: firebase.auth().currentUser.uid
    //   };
    //   createAuthor(authorObject, uid).then((authorArray) => showAuthors(authorArray));
    // }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
