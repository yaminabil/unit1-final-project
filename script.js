class driver {
    constructor (name) {
      this.name=name;
      this.drivingHours =0;
      this.sleepingHours = 0;
      this.money=100000;
      this.truckList=[];

    }


    buyTruck (truck){
        this.truckList.push(truck);
        this.money -= truck.value;



    }
 
     drive () {

    }

    sleep (){

    }

    fuel (truck) {

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


// class city {
//     constructor (name , fuelPrice)  {
//         this.name=name;
//         this.fuelPrice = fuelPrice;
//         loadPrice =
        

//     }
// }


  





























// query selection for buttons next

let buttonStart = document.querySelector ("#button-start")
let buttonTwo = document.getElementById ("button-two");
let buttonThree = document.getElementById ("button-three");
let buttonFour = document.getElementById ("button-four");
let buttonFive = document.getElementById ("button-five");

// query selection for buttons back  and inputs 

let buttonFinish = document.getElementById ("finish");
let inputName =document.getElementById ("name");



// query selection for windows 

let windowOne =document.getElementById ("window-one");
let windowTwo =document.getElementById ("window-two");
let windowThree =document.getElementById ("window-three");
let windowFour =document.getElementById ("window-four");
let windowFive =document.getElementById ("window-five");

// select all the titles 
let question = document.getElementById ("question");

// all the event listners  for next 

buttonTwo.addEventListener ("click" , (evt) =>{
     
    windowThree.style.display="block";
    windowTwo.style.display ="none"
})

buttonThree.addEventListener ("click" , (evt) =>{
     
    windowFour.style.display="block";
    windowThree.style.display ="none"
})

buttonFour.addEventListener ("click" , (evt) =>{
    
    windowFive.style.display="block";
    windowFour.style.display ="none"
})

buttonFive.addEventListener ("click" , (evt) =>{
    
    windowOne.style.display="block";
    windowFive.style.display ="none"
})




// all the event listners  for back



buttonStart.addEventListener ("click" , start)  ;
    function start () {

   


    if (inputName.value.trim() === "" ) {
        console.log ("enter a valid name "); 
        question.textContent= "Enter a valid name  please!"


    } else {
        windowTwo.style.display = "block";
        windowOne.style.display="none";


        // first we have to create a driver 

        let player = new driver ( inputName.value.trim() ) ; 
           console.log (player);

        // now we to create couple trucks 

        let truckNames = [ "Volvo" , "Kenworth","Freightliner","international","mack"]
        
   

            let truckOne = new truck (40000,2012,truckNames[0]);
            let truckTwo = new truck (35000,2011,truckNames [1]);
            // console.log (truckOne);
            // console.log (truckTwo);


        // the player have to own one in order for him to start playing 
            
             player.buyTruck (truckOne);
             console.log (player) ;


        // 

         
             




        // 

            

}} ;


buttonFinish.addEventListener ("click" ,(evt) => {
    windowTwo.style.display="none";
    windowOne.style.display="block";
    inputName.value = "" ;
} )