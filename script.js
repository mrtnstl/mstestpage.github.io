let header = document.querySelector(".header")
window.addEventListener("scroll", (event) => {
    /*let scroll = this.scrollY;
    console.log(scroll);*/
    if(scrollY <= 20){
        header.style.backgroundColor = "transparent";
    } else {
        header.style.backgroundColor = "black";
    }
    
});



let popupWrapper = document.querySelector(".popupWrapper");
let popupShade = document.querySelector(".popupShade");

/*let closeBtnReserve= document.querySelector(".popupWrapperClosebtnReserve");
let closeBtnContact= document.querySelector(".popupWrapperClosebtnContact");
*/
let closeBtnObj = ["Reserve", "Contact", "Menu"];
let i =0;
while(i < closeBtnObj.length){
    document.querySelector(".popupWrapperClosebtn"+closeBtnObj[i]).addEventListener("click", () => {
        popupWrapper.style.transition= "transform 0.6s ease-in";
        popupWrapper.style.transform = "translate(0, -100%)";

        popupWrapperMenu.style.transition = "transform 0.6s ease-in";
        popupWrapperMenu.style.transform = "translate(0, -100%)";
    })
    i++;
}

/*closeBtnReserve.addEventListener("click", () => {
    popupWrapper.style.transition= "transform 0.6s ease-in";
    popupWrapper.style.transform = "translate(0, -100%)";
    
})
closeBtnContact.addEventListener("click", () => {
    popupWrapper.style.transition= "transform 0.6s ease-in";
    popupWrapper.style.transform = "translate(0, -100%)";
    
})*/



let reserveBtn = document.querySelectorAll(".buttonReserve");
for (let i = 0; i < reserveBtn.length; i++) {
        reserveBtn[i].addEventListener("click", () => {
            popupWrapper.style.display = "block";
            popupWrapper.style.position = "fixed"; 
            popupWrapper.style.transform = "translate(0, 0)";

            popupShade.style.top = "50%";
            document.getElementById("popupShadeText").innerText = "Vagy vegye fel velünk a kapcsolatot itt:";
            document.querySelector(".popupShadeButton").innerText = "Kapcsolat";

            switchState = 0;
    })
}


let contactBtn = document.querySelector(".linkContact");
contactBtn.addEventListener("click", () => {
    popupWrapper.style.display = "block";
    popupWrapper.style.position = "fixed"; 
    popupWrapper.style.transform = "translate(0, 0)";

    popupShade.style.top = "0%";
    document.getElementById("popupShadeText").innerText = "Vagy foglaljon asztalt itt:";
    document.querySelector(".popupShadeButton").innerText = "Foglalás";

    switchState = 1;
})





let switchState;

let switchBtn = document.querySelector(".popupShadeButton");

switchBtn.addEventListener("click", () => {
    switch(switchState) {
        case 0:
            popupShade.style.top = "0%";
            document.getElementById("popupShadeText").innerText = "Vagy foglaljon asztalt itt:";
            document.querySelector(".popupShadeButton").innerText = "Foglalás";
            switchState = 1;
            //popupShade.style.animation = "consume 2s";
            break;
        case 1:
            popupShade.style.top = "50%";
            document.getElementById("popupShadeText").innerText = "Vagy vegye fel velünk a kapcsolatot itt:";
            document.querySelector(".popupShadeButton").innerText = "Kapcsolat";
            switchState = 0;
            break;
        default:
            console.log("switchState error!")
    }
})

let menuBtn = document.querySelector(".buttonMenu");
let popupWrapperMenu = document.querySelector(".popupWrapperMenu");
menuBtn.addEventListener("click", () => {
    popupWrapperMenu.style.display = "block";
    popupWrapperMenu.style.position = "fixed"; 
    popupWrapperMenu.style.transform = "translate(0, 0)";
})





function whatDayIsToday () {
    let date = new Date().toString();
    const dateSplit = date.split(" ");
    
    console.log(dateSplit[0]);
    
    const translateDayName = {"Mon":"Hétfő", "Tue":"Kedd", "Wed":"Szerda", "Thu":"Csütörtök", "Fri":"Péntek", "Sat":"Szombat", "Sun":"Vasárnap"};
    
    //console.log(Object.keys(translateDayName))
    console.log(translateDayName["Thu"]);
    let today;
    for(let i = 0; i < Object.keys(translateDayName).length; i++){
        //console.log("loop")
        console.log(translateDayName["Sun"])
        if(dateSplit[0] === Object.keys(translateDayName)[i]){
            console.log("EGYEZÉS!!!" + translateDayName[Object.keys(translateDayName)[i]]);
            today = translateDayName[Object.keys(translateDayName)[i]];
        } else{
            console.log("NINCS EGYEZÉS")
        }
    }
    
    let dayToHighlight = document.querySelectorAll(".dayHighlight");
    for( i = 0; i < dayToHighlight.length; i++){
        if(dayToHighlight[i].innerHTML.includes(today)){
            dayToHighlight[i].style.background = "linear-gradient(20deg, red, blue)";

        } else {

        }
        console.log(dayToHighlight[i].innerHTML)
    }
}

whatDayIsToday();



/*switch(dateSplit[0]){
    case "Mon":

        break;
    case "Tue":
        
        break;
    case "Wed":
        
        break;
    case "Thu":
        
        break;
    case "Fri":
        
        break;
    case "Sat":
        
        break;
    case "Sun":
        
        break;
}*/















//foglalj gomb: display block, position fixed, transform translate(0, 0)

//foglaló/kapcsolat felület X gomb: transition transform 0.6s ease-in, transform translate(0, -100%)

//Kapcsolat link:

//Kínálatunk gomb:




/*
range.addEventListener("input", function() {
  document.body.style.setProperty("--size", this.value + "px");
});
*/