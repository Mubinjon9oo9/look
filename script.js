$(document).ready(function (){
    $('.slider').slick();
});

function func(){
    document.getElementById('myPopup').style.display="table-cell"
    document.getElementById('myPopup').style.verticalAlign="middle"
    return false;
}
function se(){
    let name = document.getElementById("name").value
    let number = document.getElementById("number").value
    let date = document.getElementById("date").value
    let quantity = document.getElementById("quantity").value
    if (name.length<3){
        document.getElementsByClassName("errorN")[0].style.display = "inline"
        return false
    }
    else if (number.length<9){
        document.getElementsByClassName("errorN")[0].style.display = "none"
        document.getElementsByClassName("errorNum")[0].style.display = "inline"
        return false
    }
    else if (date==""){
        document.getElementsByClassName("errorN")[0].style.display = "none"
        document.getElementsByClassName("errorNum")[0].style.display = "none"
        document.getElementsByClassName("errorD")[0].style.display = "inline"
    }
    else if (quantity<3){
        document.getElementsByClassName("errorN")[0].style.display = "none"
        document.getElementsByClassName("errorNum")[0].style.display = "none"
        document.getElementsByClassName("errorD")[0].style.display = "none"
        document.getElementsByClassName("errorQ")[0].style.display = "inline"
        return false
    }
    else {
        document.getElementById('myPopup').style.display = "none"
        window.alert("Мы отравили сообщение с подтверждением вам на почту!")
        return false
    }
}