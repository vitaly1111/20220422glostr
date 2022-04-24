
const navbar=document.querySelector('.header__nav');
const links=navbar.querySelectorAll('a');

export const smoothScroll=() => {
	console.log(links)
	links.forEach(link => {
		link.addEventListener('click',(e) => {
			e.preventDefault()
			const section=document.querySelector(link.getAttribute('href'))
			if(section){
			/* 	section.scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				}) */
				

				seamless.scrollIntoView(section,{
					behavior: "smooth",
					block: "start",
					inline: "center",
				});
			}
		})
	})
}