const body = document.body;
const header = document.querySelector('#header');
const themeToggleBtn = document.querySelector('#theme-toggle-btn');
const logo = document.querySelector('.logo');
const allImages = document.querySelectorAll('img');

const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme){
	body.classList.add('dark-theme');
}


themeToggleBtn.addEventListener('click', changeBackground);

function changeBackground(){
	body.classList.toggle('dark-theme');

	// Adding the current theme into the localStorage
	if(body.classList.contains('dark-theme')){
		localStorage.setItem('currentTheme', 'theme');
	}else{
		localStorage.removeItem('currentTheme');
	}
}

window.addEventListener('scroll', () => {
	if(this.scrollY >= 20){
		header.classList.add('activated');
	}
	else{
		header.classList.remove('activated');
	}
})

if(allImages){
	allImages.forEach( image => {
		image.setAttribute('loading', 'lazy');
		console.log(image);
	})
}