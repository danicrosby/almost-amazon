// API CALLS FOR AUTHORS

import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const authorArray = Object.values(response.data);
        resolve(authorArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${authorId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET FAVORITE AUTHORS
const getFavoriteAuthors = (uid) => new Promise((resolve, reject) => {
  getAuthors(uid).then((authorArray) => {
    const favorites = authorArray.filter((author) => author.favorite === true);
    resolve(favorites);
  }).catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json `)
    .then(() => getAuthors(uid).then((authorsArray) => resolve(authorsArray)))
    .catch((error) => reject(error));
});

// CREATE AUTHOR

// UPDATE AUTHOR
// SEARCH AUTHORS

export {
  getAuthors, getFavoriteAuthors, deleteAuthor, getSingleAuthor
};
