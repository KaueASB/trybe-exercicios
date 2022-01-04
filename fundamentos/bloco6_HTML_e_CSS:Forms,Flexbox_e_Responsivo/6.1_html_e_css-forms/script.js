// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// 1
function href (event) { 
  event.preventDefault()
};
HREF_LINK.addEventListener('click', href);
// ou  HREF_LINK.addEventListener('click',function(event) { event.preventDefault()}); com a função dentro.

// 2
function checkbox (event) { 
  event.preventDefault()
};
INPUT_CHECKBOX.addEventListener('click', checkbox);
// ou  INPUT_CHECKBOX.addEventListener('click',function(event) { event.preventDefault()}); com a função dentro.

// 3
function input (event) { 
  if( event.key !== 'a') {
    event.preventDefault()
  }
};
INPUT_TEXT.addEventListener('keypress', input);