// console.log('slider')
const wrapperElement = document.querySelector('.slides-wrapper');
wrapperElement.innerHTML ='';
let currentSlideIndex = 0;

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

/*const slideElements = 	[];

const slidesWrapperEl = document.querySelector('.slides-wrapper');
slidesWrapperEl.innerHTML = '';
console.dir(slidesWrapperEl);
let currentIndex = 0;*/

for(let i=0; i<slides.length; i++)	{
	const src = slides[i];
	//console.log(src);
	//const li = document.createElement('li');
	const li = `
	<li class="slide">
		<img src="${src}">
	</li>
	`
	wrapperElement.innerHTML += li;
	/*li.className = 'slide';
	if (i === 0)	{
		li.classList.add('active');
	}
	const img = document.createElement('img');
	img.src = src;
	li.append(img);
	slidesWrapperEl.append(li);
	slideElements.push(li);*/
}

/*const nextArrowEl = document.querySelector('.arrow-next');
console.log(nextArrowEl);

nextArrowEl.addEventListener('click', function ()	{
	console.log('vai alla prossima slide');
	//const slideAttiva = document.querySelector('.slide.active');
	const slideAttiva = slideElements[currentIndex];
	slideAttiva.classList.remove('active');

	const slideSuccessiva = slideElements[currentIndex + 1];
	slideSuccessiva.classList.add('active');

	currentIndex++;
	//slideSuccessiva.classList.add('active');
})*/

const slideElements = document.querySelectorAll('.slide');
slideElements[currentSlideIndex].classList.add('active');



const nextElement = document.querySelector('.arrow-next');
const prevElement = document.querySelector('.arrow-prev');

nextElement.addEventListener('click', function(){
	console.log('go next');
	const lastIndex = slideElements.length - 1;

	const currentSlide = slideElements[currentSlideIndex];
	currentSlide.classList.remove('active');

	if(currentSlideIndex < lastIndex)	{

		currentSlideIndex++;
	}else{
		currentSlideIndex = 0;
	}
	//console.log('slide corrente', currentSlideIndex);
	


	//currentSlideIndex ++;
	const nextSlide = slideElements[currentSlideIndex];
	nextSlide.classList.add('active');
	//console.log('prossima slide', currentSlideIndex, currentSlide);
})

prevElement.addEventListener('click', function(){
	console.log('go prev');
})