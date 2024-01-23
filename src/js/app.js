const days = 118;
const hours = 24;
const minutes = 42;
const seconds = 0;

// Hedef tarih ve saat
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + days);
targetDate.setHours(hours);
targetDate.setMinutes(minutes);
targetDate.setSeconds(seconds);

function updateCountdown() {
    const currentDate = new Date();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
    } else {
        const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = remainingDays;
        document.getElementById('hours').textContent = remainingHours;
        document.getElementById('minutes').textContent = remainingMinutes;
        document.getElementById('seconds').textContent = remainingSeconds;

        setTimeout(updateCountdown, 1000);
    }
}

updateCountdown();


jQuery(document).ready(function($) {

	var owl = $("#owl-demo-2");
  owl.owlCarousel({
      items : 3, 
      itemsDesktop : [992,3],
      itemsDesktopSmall : [768,2], 
      itemsTablet: [480,2], 
      itemsMobile : [320,1]
  });
  $(".next").click(function(){ owl.trigger('owl.next'); });
  $(".prev").click(function(){ owl.trigger('owl.prev'); });

$('.latest-blog-posts .thumbnail.item').matchHeight();
	
});