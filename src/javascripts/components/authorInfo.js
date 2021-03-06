const authorInfo = (authorObject) => {
  document.querySelector('#add-button').innerHTML += `<h1>
  ${authorObject.first_name} ${authorObject.last_name}'s Books</h1>`;
};

export default authorInfo;

// THIS IS A CLICK EVENT, IT PUTS THE AUTHOR INFO ON THE DOM AND WHICH AUTHOR TO GRAB TO DELETE
