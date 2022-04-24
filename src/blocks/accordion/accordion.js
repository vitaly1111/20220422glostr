export const accordion=() => {
	const contents=document.querySelectorAll('.program-line__content')

	contents.forEach((item,i) => {
		const title=item.querySelector('.program-line__title')
		const descr=item.querySelector('.program-line__descr')
		title.addEventListener('click',() => {
			descr.classList.toggle('active')
		})
	})
}