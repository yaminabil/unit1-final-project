class driver {
    constructor (name) {

      this.name=name;
      this.drivingHours =0;
      this.sleepingHours = 0;
      this.restTime=0;
      this.days =0;
      this.money=100000;
      this.truckList=[];
      this.truckInUse = this.truckList [0];
      this.currentLocation = "city one";
      this.nextLocation= "";
      this.selectCity=city;
      this.milesToRun =0;

    }


    buyTruck (truck){
        this.truckList.push(truck);
        this.money -= truck.value;
    }

   

    takeLoad (city) {
        this.selectCity =city;
    }

 
     drive () {
         this.drivingHours++;

    }

    sleep (){
        this.sleepingHours++;

    }
    rest () {
        this.restTime++;

    }

    fuel (truck) {
        truck.fuel+=20;

    }


}

class truck {
    constructor (value,year,make)  {
        this.value = value; 
        this.year = year;
        this.make=make;
        this.fuel=140;
        this.miles=0;
        
    }

    burnFuel ()  {

    }

    addingMiles () {

    }

    condition () {
        
    }


    
    
}


class city {
    constructor (name )  {

        this.name=name;
        this.fuelPrice = Math.floor (Math.random() * 2) +1 ;
        this.loadPrice = Math.floor (Math.random() * 3) + 1;
        

    }
}


// query selection for buttons next

let buttonStart = document.querySelector ("#button-start");
let buttonNext = document.getElementById ("button-two");
let buttonThree = document.getElementById ("button-three");
let buttonMore = document.getElementById ("button-four");
let buttonMoreLoads = document.getElementById ("more-loads");


let goto =document.querySelectorAll (".goto");
let drive =document.getElementById ("drive");
let rest =document.getElementById ("rest");
let sleep =document.getElementById ("sleep");
let fuel =document.getElementById ("fuel");


// query others 

let chooseWind = document.getElementById ("chooseWindow") ;
let confirmButton = document.getElementById ("here");
let listBillOfLading = document.querySelectorAll ("#list-bill-of-lading > li");
let finalList1 =document.querySelectorAll ("#final-list1 > li");
let finalList2 =document.querySelectorAll ("#final-list2 > li");
let command =document.getElementById ("command");
let div1 = document.getElementById ("one1");

// query selection for buttons back  and inputs  and images

let buttonFinish = document.getElementById ("finish");
let buttonEndTheGame = document.getElementById("end-game");
let buttonStop = document.getElementById ("finish-the-game");
let inputName =document.getElementById ("name");
let cityName = document.getElementById ("city-name");
let listOne =document.querySelectorAll("#list-one > li");
let  gifSide =document.getElementById ("gif-side");
let result =document.querySelector ("#result");





// query selection for windows 

let body = document.querySelector ("body");
let windowOne =document.getElementById ("window-one");
let windowTwo =document.getElementById ("window-two");
let windowThree =document.getElementById ("window-three");
let windowFour =document.getElementById ("window-four");
let windowFive =document.getElementById ("window-five");
let windowAbout =document.getElementById ("window-about");

// select all the titles 
let question = document.getElementById ("question");

// all the event listners  for next 

let click =false ;

// all music here 
let startAudio = document.createElement("audio");
let driveAudio = document.createElement("audio");

startAudio.src = "mp3/Action-Rock.mp3";
driveAudio.src = "mp3/All-Out-Attack.mp3";
document.body.appendChild (startAudio);
document.body.appendChild (driveAudio);



buttonStart.addEventListener ("click" , start); // <--------------------------start the game here 

    function start () {

        // your location in biginig is always in city one 
        truckImage [0].classList.add ("show-truck-image");
        truckImage [1].classList.remove ("show-truck-image");
        truckImage [2].classList.remove ("show-truck-image");
        truckImage [3].classList.remove ("show-truck-image");



        // in biginig the choose window should be displayed until driver select a city where he wants to go  
        chooseWind.style.display = "none";
        result.textContent="Winner"
        result.style.color="green"
        result.style.display ="none";
        buttonMoreLoads.addEventListener ("click", moreLoads);
        summaryList [4].textContent ="Not finished";   // not finished 
        div1.style.display =  "none";
        windowAbout.style.display = "none";

       

       
          


       
        

       




    if (inputName.value.trim() === "" ) {
        console.log ("enter a valid name "); 
        question.textContent= "Enter a valid name  please!"


    } else {
        windowTwo.style.display = "block";
        windowOne.style.display="none";


         // lets add some music 
         startAudio.play();


        // first we have to create a driver 


        window.player = new driver ( inputName.value.trim() ) ; 
           

        // now we to create couple trucks 

        let truckNames = [ "Volvo" , "Kenworth","Freightliner","international","mack"]
        
   

             window.truckOne = new truck (40000,2012,truckNames[0]);
            window.truckTwo = new truck (35000,2011,truckNames [1]);
            // console.log (truckOne);
            // console.log (truckTwo);


        // the player have to own one in order for him to start playing 
            
             player.buyTruck (truckOne);
             
             console.log (player) ;


        // now we create cities 
        // here where  the fuel price  and the load price get randomly selected for each city 

        window.cityOne = new city ("city one");
        window.cityTwo = new city ("city two");
        window.cityThree = new city ("city three");
        window.cityFour = new city ("city four");
        console.log (cityOne);
        console.log (cityTwo);
        console.log (cityThree);
        console.log (cityFour);


        // 





////////////////////////////////// 

// we add event listner to all go buttons


if (click===false)  {

for (let i = 0 ; i < 4 ;i++) {
    
    goto[i].addEventListener("click" , evt => {

        
    
        
    
        if (chooseWind.style.display == "none") {
        chooseWind.style.display = "block";
        
        } 
        else {
            chooseWind.style.display = "none";
           
    
        }

        //// we will keep the value of next desteny here  and miles
        window.dest= "";
        window.milesVar=0;
        //////////////////////

         if ( i === 0 ) {

        cityName.textContent = "City One";// naming the city 
         dest = "city one"
        if (player.currentLocation === "city one") { // distance
        listOne [0].textContent = 0 +" miles";
        }
        else if (player.currentLocation === "city two" || player.currentLocation === "city three" )  {
            listOne [0].textContent = 700 +" miles";
            milesVar = 700 ;
        }else {
            listOne [0].textContent = 1400 + " miles";
            milesVar = 1400 ;
        }
       
        listOne [1].textContent = "$ "+cityOne.fuelPrice + " per gallon"; //fuel price 

        listOne [2].textContent = player.currentLocation+" - "+" city one" ;
        listOne [3].textContent = "$ "+ cityOne.loadPrice;

            
        }
       


           
         
         if ( i === 1 ) {

            cityName.textContent = "City Two";
            dest = "city two";
            if (player.currentLocation ==="city two") {
                listOne [0].textContent = 0 +" miles";
            } else if (player.currentLocation === "city one" || player.currentLocation === "city four") {
                listOne [0].textContent = 700 +" miles";
                milesVar = 700 ;
                
            } else {
                listOne [0].textContent = 1400 + " miles";
                milesVar = 1400 ;
            }

            listOne [1].textContent = "$ "+cityTwo.fuelPrice +" per gallon"; 
            listOne [2].textContent = player.currentLocation+" - "+" city two" ;
            listOne [3].textContent = "$ "+ cityTwo.loadPrice;

            
             }
    
         if ( i === 2 ) {
            
                cityName.textContent = "City Three";
                dest = "city three"
                if (player.currentLocation === "city three" ) {
                    listOne [0].textContent = 0 +" miles";
                }else if (player.currentLocation === "city one" || player.currentLocation === "city four") {
                    listOne [0].textContent = 700 +" miles";
                    milesVar = 700 ;
                    
                } else {
                    
                    listOne [0].textContent = 1400 + " miles";
                    milesVar = 1400 ;
                }

            listOne [1].textContent = "$ "+cityThree.fuelPrice +" per gallon"; 
            listOne [2].textContent = player.currentLocation+" - "+" city three" ;
            listOne [3].textContent = "$ "+ cityThree.loadPrice;


                 }
    
         if ( i === 3 ) {
                    cityName.textContent = "City Four";
                    dest="city four"
                    if (player.currentLocation ==="city four") {
                        listOne [0].textContent = 0 +" miles";
                    }else if (player.currentLocation === "city two" || player.currentLocation === "city thre") {
                        listOne [0].textContent = 700 +" miles";
                        milesVar= 700 ;
                        
                    }else {
                        
                        listOne [0].textContent = 1400 + " miles";
                        milesVar = 1400 ;
                    }

                    listOne [1].textContent = "$ "+cityFour.fuelPrice +" per gallon"; 
                    listOne [2].textContent = player.currentLocation+" - "+" city four" ;
                    listOne [3].textContent = "$ "+ cityFour.loadPrice;

                     }
        
        
    
    }) }
    
    
    ////////////////////////////////////////
    click=true; // at this point  start button was clicked so we need to change click to true so when we click the button
    // start again will not add diffrent event listners to the buttons go 
}
else {
    console.log ("button  start was clicked once already  no need to add event listners to buttons go") ;}      

}  //<------------closed curly braces for the else  condition ( if the player  entered  a valid name )
} ; // <---------- closed curly braces for start button  ;


confirmButton.addEventListener ("click" , evt => {
   
    chooseWind.style.display = "none"; // if player confirms we need to close the choose window
    player.nextLocation= dest; // we update the player next destination
    player.milesToRun=milesVar ; // and miles to run 

// before we do anything  we need to save miles to run  in a variable to calculate the money later 
   
   window.milesToRunVar = player.milesToRun ;  

    if (dest === "city one") { player.takeLoad (cityOne)}
    if (dest === "city two") { player.takeLoad (cityTwo)}
    if (dest === "city three") { player.takeLoad (cityThree)}
    if (dest === "city four") { player.takeLoad (cityFour)}
    
    console.log (player);

})


buttonFinish.addEventListener ("click" ,(evt) => {
    windowTwo.style.display = "none";
    windowOne.style.display = "block"
    chooseWind.style.display = "none";
   
    inputName.value = "" ;
} )


buttonNext.addEventListener ("click" , (evt) =>{
    if (player.currentLocation === player.nextLocation || player.nextLocation === "") { // if player chose the same location he's in
        alert("pick diffrent location");
    } else {
    windowThree.style.display = "block";
    windowTwo.style.display = "none";
    console.log("test");

    //pause the audio 
     startAudio.pause();
     driveAudio.play ();

    listBillOfLading [0].textContent = player.name;
    listBillOfLading [1].textContent = player.currentLocation;
    listBillOfLading [2].textContent = player.nextLocation;

    if (player.milesToRun ===  1400)   {
    listBillOfLading [4].textContent = "in "+ 2 + " Days";
    listBillOfLading [5].textContent ="$"+1400*player.selectCity.loadPrice ;
    } else {
        listBillOfLading [4].textContent = "in "+1 + " Day";
        listBillOfLading [5].textContent = "$"+700*player.selectCity.loadPrice ;

    }

    }
})


/** window three player info ************************************* */
 
// query selection 
buttonThree.addEventListener ("click" , (evt) =>{
     
    windowFour.style.display= "block";
    windowThree.style.display = "none"; 

     

    gifSide.style.backgroundImage="";
    j=0;

    // we fill up the 2 lists of the side info

    //driver info 

finalList1 [0].textContent =player.name;
finalList1 [1].textContent =player.currentLocation;
finalList1 [2].textContent =player.nextLocation;
finalList1 [3].textContent =player.drivingHours;
finalList1 [4].textContent =player.sleepingHours;
finalList1 [5].textContent =player.restTime;
finalList1 [6].textContent =player.money;

// player.truckList.forEach(element => {
//     finalList1 [7].textContent += element.make + " ";
    

// });

finalList1 [7].textContent =truckOne.make;


finalList1 [8].textContent =player.days;
finalList1 [9].textContent =player.milesToRun;

    // truck info 

 finalList2 [0].textContent = truckOne.value;   
 finalList2 [1].textContent = truckOne.year; 
 finalList2 [2].textContent = truckOne.make; 
 finalList2 [3].textContent = truckOne.miles; 
 finalList2 [4].textContent = truckOne.fuel; 




})



// driving time 

let gifDrive = ['img/gif1.gif',
'img/gif2.gif',
'img/gif3.gif',
'img/gif4.gif',
'img/gif5.gif',
'img/gif6.gif',
'img/gif7.gif',
'img/gif4.gif',
'img/gif1.gif',
'img/gif1.gif',
'img/gif5.gif',
]


let gifRest = ['img/gif-rest-one.gif',
'img/gif-rest-two.gif',
'img/gif-rest-three.gif'];


let gifSleep =['img/sleep1.gif',
'img/sleep2.gif',
'img/sleep3.gif',
'img/sleep4.gif',
'img/sleep5.gif',
'img/sleep6.gif',
'img/sleep7.gif',
'img/sleep8.gif',
'img/sleep9.gif',
'img/sleep10.gif',
'img/sleep10.gif']

let fuelImage = ['img/fuel1.jpeg',
'img/fuel3.jpeg',
'img/fuel2.jpeg',
'img/fuel4.jpeg',
'img/fuel5.jpeg',
'img/fuel6.jpeg',
'img/fuel7.jpeg']




let i =0 ;


console.log (gifSide);
console.log (drive);

//driving ------------------------------------------------->



drive.addEventListener ("click" ,driving);

function driving() {
   
gifSide.style.backgroundImage = (`url(${gifDrive [i]})`);




// increment driver time 
player.drivingHours+=1;
finalList1 [3].textContent =player.drivingHours;

// if sleeping is 10 we reset  sleeping hrs 
if (player.sleepingHours == 10) {
player.sleepingHours = 0 ;
finalList1 [4].textContent =player.sleepingHours;
}

// we have to decrement truck fuel  and increment 

truckOne.fuel -= 13;
finalList2 [4].textContent = truckOne.fuel; 

if (truckOne.fuel < 0) {

    truckOne.fuel = 0;
    finalList2 [4].textContent = truckOne.fuel; 

}

console.log (i);
if ( i === 2 || i ===5 || i === 8 ) {
     drive.removeEventListener ("click",driving);
     command.textContent="you need to rest one hour  !" ; 
     rest.addEventListener ("click" , resting) ;


    } else {
        command.textContent="";
        drive.style.display ="block";

    }




// increment i 
i++;


if (i === 11 ) {
    if (player.milesToRun < 100) {
        command.textContent = "congratulation you are arrived ";
    }
    command.textContent += "you need to sleep 10 hours!"
    drive.removeEventListener ("click",driving);
    sleep.addEventListener ("click" , sleeping) ;
    if (player.milesToRun > 0) { i=0; }


    
   
}

// decrement player miles to run  

player.milesToRun -= 64;
if(player.milesToRun > 0) {
finalList1 [9].textContent = player.milesToRun;
} else { 
    finalList1 [9].textContent = 0 ;
    player.milesToRun =0;


     

    
}

}

// rest --------------------------> 
function resting() {

    gifSide.style.backgroundImage = (`url(${gifRest [player.restTime]})`);

    player.restTime++;
    finalList1 [5].textContent =player.restTime; 
    command.textContent="now you can go back to driving" ; 
    drive.addEventListener ("click",driving);
    rest.removeEventListener ("click", resting);

}

function sleeping () {
    gifSide.style.backgroundImage = (`url(${gifSleep [player.sleepingHours]})`);
    if (player.sleepingHours < 10){
    player.sleepingHours++; 
    finalList1 [4].textContent =player.sleepingHours;

     }
    else {

        command.textContent="you need to fuel up " ; 
        sleep.removeEventListener ("click",sleeping);
        fuel.addEventListener ("click" ,fueling);

        player.drivingHours = 0;
        finalList1 [3].textContent =player.drivingHours;

        player.restTime = 0;
        finalList1 [5].textContent = player.restTime;    

    }
}



// fueling -------------------------------------->
window.j = 0;
function fueling () {
    if (truckOne.fuel < 140 ) {
        gifSide.style.backgroundImage = (`url(${ fuelImage[j]})`);
        j++;

    player.fuel(truckOne) ;
    finalList2 [4].textContent = truckOne.fuel; 
    command.textContent = "keep fueling"
   

    } else {
        fuel.removeEventListener ("click",fueling);

        if ( player.milesToRun > 0 ) {

            drive.addEventListener ("click" , driving);
            command.textContent = 
            `now after sleeping and your truck tank is full you can go back to drive you spend about ${140*player.selectCity.fuelPrice} dollars in fuel so far`;
            j=0;

        } else {

            if (milesToRunVar === 700 ){
            command.textContent = ` you spend ${140*player.selectCity.fuelPrice} dollars in fuel and you made ${milesToRunVar * player.selectCity.loadPrice} dollars for this load , click more  to check out your options `;
            player.money +=  milesToRunVar * player.selectCity.loadPrice - 140*player.selectCity.fuelPrice;
            finalList1 [6].textContent =player.money;
            player.days++;
            finalList1 [8].textContent =player.days;

            // we have to increment truck miles 
            truckOne.miles+=700;
            finalList2 [3].textContent = truckOne.miles; 

            // add event listner to button more 
            buttonMore.addEventListener ("click" , more );


            } else {
                command.textContent = ` you spend ${280*player.selectCity.fuelPrice} dollars in fuel and you made ${milesToRunVar * player.selectCity.loadPrice} dollars for this load , click more  to check out your options `;    
                player.money +=  milesToRunVar * player.selectCity.loadPrice - 280*player.selectCity.fuelPrice;
                finalList1 [6].textContent =player.money;
                player.days+=2;
                finalList1 [8].textContent =player.days;

                     // we have to increment truck miles 
            truckOne.miles+=1400;
            finalList2 [3].textContent = truckOne.miles; 

             // add event listner to button more 
             buttonMore.addEventListener ("click" , more ); // <----- more()

            }

        }

    }


    
}


//more --------------------------------> 

function more () {
    windowFive.style.display ="block";
    windowFour.style.display = "none";

    //pause the audio 
    startAudio.play();
    driveAudio.pause();

    drive.addEventListener ("click" , driving);
    command.textContent = "";

    player.currentLocation=player.selectCity.name ;
    player.nextLocation="";

    buttonMore.removeEventListener ("click" , more) ;
    if (player.days>4 ){
        result.style.display="block";
        result.style.color ="red" ;
        result.textContent = "you lost because you're not home ";
       
        buttonMoreLoads.removeEventListener ("click" , moreLoads); }

    if (player.days === 4 && player.money > 64000)  {
        result.style.display="block";
        buttonMoreLoads.removeEventListener ("click" , moreLoads);
       
    }else if (player.days===4 && player.money < 64000 ){
        result.style.display="block";
        result.style.color ="red" ;
        result.textContent = "you lost because you made less than $4000";
        buttonMoreLoads.removeEventListener ("click" , moreLoads);
    } else if (player.days===4 && player.currentLocation!== "city one") {
        result.style.display="block";
        result.style.color ="red" ;
        result.textContent = "you lost because you made less than $4000";
        buttonMoreLoads.removeEventListener ("click" , moreLoads);
    }

}


// query for truck image 

let truckImage =document.querySelectorAll ("img");
console.log (truckImage);

buttonMoreLoads.addEventListener ("click" , moreLoads);

function moreLoads() {
    
    div1.style.display =  "none";
    
    windowTwo.style.display="block";
    windowFive.style.display ="none";
   
    console.log (player);

    if (player.currentLocation === "city two") {
        truckImage [1].classList.add ("show-truck-image");
        truckImage [0].classList.remove ("show-truck-image");
        truckImage [2].classList.remove ("show-truck-image");
        truckImage [3].classList.remove ("show-truck-image");
        
    }else if (player.currentLocation === "city one") {

        truckImage [0].classList.add ("show-truck-image");
        truckImage [1].classList.remove ("show-truck-image");
        truckImage [2].classList.remove ("show-truck-image");
        truckImage [3].classList.remove ("show-truck-image");
    }else if (player.currentLocation === "city three") {

        truckImage [2].classList.add ("show-truck-image");
        truckImage [0].classList.remove ("show-truck-image");
        truckImage [1].classList.remove ("show-truck-image");
        truckImage [3].classList.remove ("show-truck-image");
    } else {
        truckImage [3].classList.add ("show-truck-image");
        truckImage [0].classList.remove ("show-truck-image");
        truckImage [1].classList.remove ("show-truck-image");
        truckImage [2].classList.remove ("show-truck-image");
    }

}

// End the Game --------------------------->

buttonEndTheGame.addEventListener ("click", end) ;
function end() {
    windowOne.style.display="block";
    windowFive.style.display ="none";
    inputName.value="";  
}


/// query  for summary list ----------------->

let summaryList = document.querySelectorAll("#Summary-list > li");

// stop button ------------------------------->
buttonStop.addEventListener ("click" , stop );

function stop() {

    div1.style.display =  "block";
    console.log (milesToRunVar);

    summaryList [0].textContent = player.currentLocation ;
    summaryList [1].textContent = player.days ;
    if(player.selectCity === cityThree || player.selectCity === cityTwo ) {
        summaryList[2].textContent =700;
    }else if (player.selectCity === cityOne ) {
        summaryList[2].textContent = 0;
    } else {
        summaryList[2].textContent = 1400;
    }
    summaryList [3].textContent =player.money-60000;

    if (player.days >= 4 ) {
        summaryList [4].textContent ="finished";    }
    
}



about.addEventListener ("click" , aboutFun);
function aboutFun() {
    if (windowAbout.style.display === "none"){
    windowAbout.style.display = "block";
      

    } else {
        windowAbout.style.display = "none";

    }

    
}




