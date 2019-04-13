function maskPhone(elements){
    new IMask(elements, {
        mask: '+{7}(000)000-00-00',
    });
}

function phoneCheck(){
    if(document.getElementsByName("phone")[0].value.length ==16){
        return true;
    }else{
        document.getElementsByTagName("h2")[0].innerText = "Не коректный телефон";
        return false;
    }
}
function paswordCheck(){
    if(document.getElementsByName("pasword")[0].value.length >4){
        return true;
    }else{
        document.getElementsByTagName("h2")[1].innerText = "Пароль состоит как минимум из пяти символов";
        return false;
    }
}
window.onload = function(){
    maskPhone(document.getElementsByName("phone")[0])

    document.getElementsByName("phone")[0].addEventListener("click", function(){
        document.getElementsByTagName("h2")[0].innerText = "";
    })

    document.getElementsByName("pasword")[0].addEventListener("click", function(){
        document.getElementsByTagName("h2")[1].innerText = "";
    })

    document.getElementsByName("enter")[0].addEventListener("click", function(e){
        e.preventDefault();        
        if (phoneCheck() && paswordCheck()){
            console.log("Click");
        }
    })


}