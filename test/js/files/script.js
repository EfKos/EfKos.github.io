
$(document).ready(function () {
	$('body').on('click', '.number-minus, .number-plus', function () {
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});

	$('body').on('change', '.number-text', function () {
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;
		} else if (max && val > max) {
			val = max;
		}
		$input.val(val);
	});
});

var numb = document.getElementById('number-text').value;


$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.burger__list').toggleClass('active');
	});
});

$(document).ready(() => { 

	const onScrollHeader = () => { 
	  const header = $('.header') 
	  let prevScroll = $(window).scrollTop() 
	  let currentScroll 
	  $(window).scroll(() => { 
		currentScroll = $(window).scrollTop() 
		const headerHidden = () => header.hasClass('header_hidden') 
		if (currentScroll > prevScroll && !headerHidden()) { 
		  header.addClass('header_hidden') 
		}
		if (currentScroll < prevScroll && headerHidden()) { 
		  header.removeClass('header_hidden') 
		}
		prevScroll = currentScroll 
	  })
	} 
	onScrollHeader()  
  });
  
  document.addEventListener('click', function(e) {
	if (!e.target.classList.contains('form__button-add')) return;
   
	alert('Товар в количестве ' + numb + ' единиц добавлен в корзину');
  });

  document.addEventListener('click', function(e) {
	if (!e.target.classList.contains('form__button-favorite')) return;
   
	alert('Товар добавлен в избранное в количестве ' + numb);
  });


  $("body").on("click", ".main__img-mini__active", function () {
	$("#main").attr("src", $(this).attr("src"));
  });