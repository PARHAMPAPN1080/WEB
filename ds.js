let url=['/About Me']

let show=() =>{

window.location.hash=url[Math.floor((Date.now()/100) % url.length)]

setTimeout(show,70)

}


show()


navigator.vibrate(200);






window.addEventListener('beforeunload' , event => {
    event.preventDefault();
    event.returnValue = '';
});
