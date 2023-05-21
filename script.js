//your JS code here. If required.
function time(){
let date=new Date();
document.getElementById("timer").innerText=
	`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
	setTimeout(time,1000)
}
time();