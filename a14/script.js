document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the comment text from the textarea
    var commentText = document.getElementById('commentText').value;
  
    if (commentText.trim() !== '') {
      // Create a new list item for the comment
      var commentItem = document.createElement('li');
      commentItem.textContent = commentText;
  
      // Add the new comment to the comment list
      var commentList = document.getElementById('commentList');
      commentList.appendChild(commentItem);
  
      // Clear the textarea after adding the comment
      document.getElementById('commentText').value = '';
    }
  });
  