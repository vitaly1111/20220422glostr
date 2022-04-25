
const daysBlock=document.querySelector('.timer__days')
const hoursBlock=document.querySelector('.timer__hours')
const minutesBlock=document.querySelector('.timer__minutes')
const secondsBlock=document.querySelector('.timer__seconds')
const dateDedline=new Date('26 april 2022')
let interval;

const numWord=(value,words) => {
	value=Math.abs(value)%100
	const lastNum=value%10
	//return words[2]
	if (value>10&value<20) {
		return words[2]
	}
	if (lastNum>1&&lastNum<5) { return words[1] }
	if (lastNum===1) { return words[0] }
	return words[2]
}


const updateTimer=() => {
	const date=new Date()
	const dateRemaning=(dateDedline.getTime()-date.getTime())/1000

	const days=Math.floor(dateRemaning/60/60/24)
	const hours=Math.floor(dateRemaning/60/60%24)
	const minutes=Math.floor(dateRemaning/60%60)
	const seconds=Math.floor(dateRemaning%60)
	const fDays=days < 10 ?'0' + days : days;
	const fHours=hours < 10 ?'0' + hours : hours;
	const fMinutes=minutes<10? '0' + minutes : minutes;
	const fSeconds=seconds <10? '0' + seconds : seconds;
	daysBlock.textContent=fDays
	hoursBlock.textContent=fHours
	minutesBlock.textContent=fMinutes
	secondsBlock.textContent=fSeconds

	secondsBlock.nextElementSibling.textContent=numWord(fSeconds,['Секунда','Секунды','Секунд'])
	minutesBlock.nextElementSibling.textContent=numWord(fMinutes,['Минута','Минуты','Минут'])
	hoursBlock.nextElementSibling.textContent=numWord(fHours,['Час','Часа','Часов'])
	daysBlock.nextElementSibling.textContent=numWord(fDays,['День','Дня','Дней']) 

	if (dateRemaning<0){
		clearInterval(interval)
		daysBlock.textContent='00'
		hoursBlock.textContent='00'
		minutesBlock.textContent='00'
		secondsBlock.textContent='00'
	}
	
}



export const timer=()=>{

	/* console.log(hours)
	console.log(minutes)
	console.log(seconds) */
	updateTimer();
	interval=setInterval(updateTimer, 500);

	
	/* console.log(numWord(54,['секунда','секунды','секунд'])) */
}

