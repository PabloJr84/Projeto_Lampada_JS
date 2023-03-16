const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById ("lamp");

function lampOn (){
    if (!isLampBroken ()){
    lamp.src = "./img/ligada.jpg";
    }
}

function lampOff () {
    if (!isLampBroken() ) {
    lamp.src = "./img/desligada.jpg";
    }
}

function lampBroker () {
    lamp.src = "./img/quebrada.jpg";
}

function isLampBroken(){
    return lamp.src.indexOf( "quebrada") > -1

}

turnOn.addEventListener ("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener ("mouseover", lampOn);
lamp.addEventListener ("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroker);