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

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorsArray) => resolve(authorsArray)))
    .catch((error) => reject(error));
});

// CREATE AUTHOR
const createAuthor = (authorObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(uid).then((authorArray) => resolve(authorArray));
        });
    }).catch((error) => reject(error));
});

// GET FAVORITE AUTHORS
const getFavoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => {
      const favAuthorsArray = Object.values(response.data);
      resolve(favAuthorsArray);
    }).catch((error) => reject(error));
});

// UPDATE AUTHOR
// SEARCH AUTHORS

export {
  getAuthors, getFavoriteAuthors, createAuthor, deleteAuthor
};
