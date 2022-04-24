
//import {enableScroll,disableScroll,handlerModal} from '../blocks/popup/popup'

const contents=document.querySelectorAll('.program-line__content')

contents.forEach((item,i)=>{
	const title=item.querySelector('.program-line__title')
	const descr=item.querySelector('.program-line__descr')
	title.addEventListener('click',()=>{
		descr.classList.toggle('active')
	})
})
/* 
handlerModal(presentOrderBtn,pageOverlayModal,'page__overlay_modal_open',modalClose,'slow') */

//# sourceMappingURL=main.js.map
