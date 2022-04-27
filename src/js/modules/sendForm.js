import { async } from "regenerator-runtime"

const form=document.querySelector('.modal')
const formText=form.querySelector('input[type=text]')
const formTel=form.querySelector('input[type=tel]')
const formMail=form.querySelector('input[type=email]')
let sendObject={}

export const sendForm=async () => {
	form.addEventListener('submit',(e) => {
		e.preventDefault()
		console.log('submit')
		sendObject={
			text: formText.value,
			tel: formTel.value,
			mail: formMail.value
		}
		fetch('https://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			body: JSON.stringify(sendObject),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json))
			.finally(()=>{
				formText.value=""
				formTel.value=""
				formMail.value=""
			})

	})
}