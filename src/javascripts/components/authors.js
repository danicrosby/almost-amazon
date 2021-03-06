const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  document.querySelector('#form-container').innerHTML = '';

  // TODO: Add ID on Author name for click event
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <a href="#"><h5 id="author-name-title--${item.firebaseKey}" class="card-title">${item.first_name} ${item.last_name}</h5></a>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
      </div>
    </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
