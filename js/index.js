let userName = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");
alert(`Hi ${userName}! Lets Play!!`);
let userResponse = prompt("Who are you: Bear, Ninja, or Hunter?");
let arr = ["Bear", "Ninja", "Hunter"]
 let num = Math.floor(Math.random() * 3);
let computerResponse = arr[num]

//Get computer response


document.getElementById("userResult").innerHTML = `${userName} you chose ${userResponse}`
document.getElementById("computerResult").innerHTML = `The computer chose ${computerResponse}`


    if(userResponse.toLowerCase() === computerResponse.toLowerCase()){
        document.getElementById("winner").innerHTML = "Tie";
    }
    else if(userResponse.toLowerCase() === "ninja" && computerResponse.toLowerCase() === "hunter" || userResponse.toLowerCase() === "hunter" && computerResponse.toLowerCase() === "bear" || userResponse.toLowerCase() === "bear" && computerResponse.toLowerCase() === "ninja"){
        document.getElementById("winner").innerHTML = "You Win!!";
    }
    else{
        document.getElementById("winner").innerHTML = "Computer Wins!!"
    }

