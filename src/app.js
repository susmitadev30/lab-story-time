//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours){
    var a=typeof(address);
    var b=typeof(distanceFromTown);
    var c=typeof(hasNeighbours);
    var concat = a + b + c;
    return concat;
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily){
    var p=typeof(parents);
    var s=typeof(noOfSiblings);
    var n=typeof(isNuclearFamily);
    if(p==="string" && s==="number" && n==="boolean"){
        return true;
    }
    else{
        return false;
    }
}
//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber){
    let a=ageInText;
    let b=ageInNumber;
    if(isNaN(a)== false && isNaN(b)==true){
        return null;
    }
    else if(isNaN(a)==true && isNaN(b)==false){
        return a;
    }
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel){
    let sweetShared=0;
    if(typeof(totalNoOfSweets) == isNaN ||typeof(sweetsConsumedByKaren) == isNaN 
    ||typeof(sweetsConsumedInNMeters) ==isNaN ||typeof(metersToTravel) !='number'){
        return "No sweets for Karen's friend";
    }
    else if(totalNoOfSweets){
    sweetShared = (totalNoOfSweets -(sweetsConsumedByKaren + (sweetsConsumedInNMeters * metersToTravel)))/2;
      return sweetShared;
    }
}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit){
    if(typeof(fahrenheit) !== "number")
        return 'Technical Error!';
    else{
        return (fahrenheit - 32) *(5/9);
    }   
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
    if(choice==1){
        return "Take her daughter to a doctor";
    }
    else if(choice==2){
       return 'Talk to her husband about it';
    }
    else if(choice =="Let's talk"){
        return 'Lock her daughter in her room';
    }
    else{
       return "Counsel her daughter herself";
    }

}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
let strategies = [
    "Try talking to her.",
    "Make her favourite sweets.",
    "Let her watch TV all night.",
    "Don't tell her to study.",
    "Read her a bedtime story.",
    "Let her bunk school anytime."
];
function consoleKaren(strategies){
    var a= strategies[0];
    var b=strategies[1];
    var c=strategies[2];
    var d=strategies[3];
    var e=strategies[4];
    var f=strategies[5];
    var total = a + ' '+ b + ' '+ c +' ' + d + ' '+ e + ' ' + f 
    return total.length;
} 
