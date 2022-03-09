function menuresponsivo(){
    let body = document.querySelector(".body")
    let menumobile = document.querySelector(".menucontentmobile")
    
    if(menumobile.className === "menucontentmobile open"){
        menumobile.className = "menucontentmobile"
        body.className = "body"
    }else{
        menumobile.className += " open"
        body.className += " overflow-hidden"
    }  
}