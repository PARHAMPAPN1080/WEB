window.addEventListener('beforeunload' , event => {
    event.preventDefault();
    event.returnValue = '';
});




function menu(){




    document.getElementById('menu').style.display='none'


    document.getElementById('nav').style.display='block'



    document.getElementById('sect').style.display='none'

    document.getElementById('clos').style.display='block'






}




function clos(){



    document.getElementById('menu').style.display='block'


    document.getElementById('nav').style.display='none'


    document.getElementById('sect').style.display='block'

    document.getElementById('clos').style.display='none'







}





navigator.vibrate(200);










function todp(){
   window.scrollTo({top:0,behavior:"smooth"}) 
}




let url=['/Home']

let show=() =>{

window.location.hash=url[Math.floor((Date.now()/100) % url.length)]

setTimeout(show,70)

}


show()



Notification.requestPermission()
.then(function showw(){
    var notf=new Notification(
        'سلام',{
            body:"خوش آمدید",
            icon:"4k.jpg"
        }
    )
})




