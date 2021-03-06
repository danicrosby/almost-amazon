import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import getAuthors from '../helpers/data/authorData';
import getBooks from '../helpers/data/bookData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(userObject.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.id); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getBooks(userObject.uid).then((books) => showBooks(books));// put all books on the dom
  getAuthors(userObject.uid).then((authors) => showAuthors(authors)); // put all authors on the dom
};

export default startApp;
