import { emptyAuthors, showAuthors } from '../components/authors';
import { emptyBooks, showBooks } from '../components/books';
import signOut from '../helpers/auth/signOut';
import { getAuthors, getFavoriteAuthors } from '../helpers/data/authorData';
import { getBooks, getSaleBooks } from '../helpers/data/bookData';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // BOOKS ON SALE // FILTERS
  document.querySelector('#sale-books').addEventListener('click', () => {
    getSaleBooks().then((saleBooksArray) => {
      if (saleBooksArray.length) {
        showBooks(saleBooksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    // GET ALL BOOKS on click
    getBooks(uid).then((booksArray) => {
      if (booksArray.length) {
        showBooks(booksArray);
      } else {
        emptyBooks();
      }
    });
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // AUTHORS
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authorArray) => {
      if (authorArray.length) {
        showAuthors(authorArray);
      } else {
        emptyAuthors();
      }
    });
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    getFavoriteAuthors().then((authorArray) => {
      if (authorArray.length) {
        showAuthors(authorArray);
      } else {
        emptyAuthors();
      }
    });
  });
};

export default navigationEvents;
