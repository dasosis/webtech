document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var commentText = document.getElementById('commentText').value;
  
    if (commentText.trim() !== '') {

      var commentItem = document.createElement('li');
      commentItem.textContent = commentText;

      var commentList = document.getElementById('commentList');
      commentList.appendChild(commentItem);

      document.getElementById('commentText').value = '';
    }
  });
  