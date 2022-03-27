window.addEventListener('beforeunload' , event => {
    event.preventDefault();
    event.returnValue = '';
});





navigator.vibrate(200);










let url=['/CallMe']

let show=() =>{

window.location.hash=url[Math.floor((Date.now()/100) % url.length)]

setTimeout(show,70)

}


show()


function D(){
alert('باموفقیت انجام شد')

}