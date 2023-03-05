console.log("this is js")

let a = document.getElementById("event_info");
console.log(a.firstElementChild.innerText)

if(localStorage.getItem("allowed")){
    console.log("allowed");
    document.getElementById("overlay").style.display = "none";
}
else{
    document.getElementById("overlay").style.display = "block";
    console.log(localStorage.getItem("allowed"))
}

// request permission
Notification.requestPermission().then((what) =>{
    document.getElementById("overlay").style.display = "none";
    
        alert(what);
      
        if(what=="granted"){

            localStorage.setItem("allowed",true);

            setTimeout(() => {
                const noti = new Notification("Upcoming event !!",{
                    body : a.firstElementChild.innerText,
                    data : { Hello : "world"},
                    icon : "logo.png",
                    tag : "new event updated",
                    vibrate : true,
                })
                noti.addEventListener("close",e=>{
                console.log(e)
            }, 5000);

        })
    }       
    else{
        document.getElementById("overlay").style.display = "none";
          localStorage.setItem("allowed",false);
    }
})

