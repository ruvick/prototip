const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

$(function () {
	$('.nav-icon-5').click(function () {
		$('.menu-list').toggleClass('show-menu')
		$('body').toggleClass('lock')
	})	
});