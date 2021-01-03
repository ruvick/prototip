//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});