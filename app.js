const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
portfolioItems.forEach(portfolioItem => {
	portfolioItem.addEventListener('mouseover', () => {
		portfolioItem.childNodes[1].classList.add('img-darken');
	});

	portfolioItem.addEventListener('mouseout', () => {
		portfolioItem.childNodes[1].classList.remove('img-darken');
	});
});

const aboutItems = document.querySelectorAll('.about-item-wrapper');
aboutItems.forEach(portfolioItem => {
	portfolioItem.addEventListener('mouseover', () => {
		portfolioItem.childNodes[1].classList.add('img-darken');
	});

	portfolioItem.addEventListener('mouseout', () => {
		portfolioItem.childNodes[1].classList.remove('img-darken');
	});
});

const galleryItems = document.querySelectorAll('.gallery-item-wrapper');
galleryItems.forEach(portfolioItem => {
	portfolioItem.addEventListener('mouseover', () => {
		portfolioItem.childNodes[1].classList.add('img-darken');
	});

	portfolioItem.addEventListener('mouseout', () => {
		portfolioItem.childNodes[1].classList.remove('img-darken');
	});
});
