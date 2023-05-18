function updateCounter() {
    var textInput = document.getElementById("text-input");
    var counter = document.getElementById("counter");
    var remainingChars = 100 - textInput.value.length;
    counter.textContent = remainingChars;
  }
  