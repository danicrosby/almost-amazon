import selectAuthor from './selectAuthor';

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="title">Author Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Author Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="genre">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Genre" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="fav-author">
        <label class="form-check-label" for="sale">Add to favorites</label>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  selectAuthor();
};

export default addAuthorForm;
