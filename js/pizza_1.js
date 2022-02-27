const prompt = document.getElementById("prompt-area");
const respond = document.getElementById("response-area");
// const form = document.getElementById("input-form");
const userInput = document.getElementById("user-input");
const form = document.getElementById('form');
const log = document.getElementById('log');
let answerArr = [];
let responseLog = "";
let x=0;




const questionArr = 
["Let's check on your pizza!" + "\n" + "Please enter your name.",
'! Have you placed your order?',
'Great! How long ago, in minutes, did you place it?'];


function logSubmit(event) {
    userInput.value = ""
    x++;
    event.preventDefault();
}

if (typeof userInput.value == '') {
    console.log("if 1 = true");
    alert("Something went wrong, please reload the page and try again");
    } else {
        console.log("if 1 = false");
        let greet = 'Hello, ' + userInput.value ;
        prompt.textContent = greet + questionArr[x];
        form.addEventListener('submit', logSubmit);
        if (userInput == '') {
            console.log("if 2 = true");
            alert("Something went wrong, please reload the page and try again");
            } else {
                console.log("if 2 = false");
                prompt.textContent = questionArr[x]
                form.addEventListener('submit', logSubmit);
            }
    }





 /*


        form.addEventListener('submit', logSubmit);
userInput.placeholder = responseLog;

console.log(userInput);

function updateLog(x) {
    input.placeholder = "Thanks!"

    // responseLog = responseLog + '<p>' + x + '</p>';
    // prompt.innerHTML = responseLog;
    // x.preventDefault();
}

function refreshLog(x) {
    responseLog = responseLog + ' ' + x + ' ' ;
    console.log(responseLog);
    response.innerHTML = responseLog;
    x.preventDefault();
}


form.onsubmit = updateLog;

// form.addEventListener('submit', refreshLog);









// if (name === "") { 
//     alert("Something went wrong, please reload the page and try again");
// } else {
//     updateLog("Hello, " + name + "! Let's check on your order!")
//     if ( )
//         updateLog('"NAME"')
//         // prompt.textContent = responseLog
//         prompt.innerHTML = responseLog
// }






















// // One
// if (name === "") {
//     // alert("Something went wrong, please reload the page and try again");
// } else {
//     // alert("Hello, " + name + "! Let's check on your order!");
//     // let orderPlaced = prompt("Have you placed your order yet, " + name + '? Please type: "yes" or "no"');
//     if (orderPlaced !== "yes") {
//         // alert("Well, we would love to make you a pizza, call and place an order to get started!")
//     } else { 
//         let orderStatus = prompt("How long ago, in minutes, did you order?");
//         if (orderStatus === "Order Placed") {
//             // alert("We have your order! Let's get this party started!")
//         } else if (orderStatus === "Preparing Pizza") {
//             // alert("We are preparing our finest ingredients fresh for you!")
//         } else if (orderStatus === "In Oven") {
//             // alert("Is it hot in here? No, that is just our brick oven cooking your pie to perfection!")
//         } else if (orderStatus === "Boxing") {
//             // alert("We're tucking your pizza in for a safe trip home!")
//         } else if (orderStatus === "Out for Delivery") {
//             // alert("Hang tight, almost there!")
//         } else if (orderStatus === "Delivered") {
//             // alert("Pizza Party time!")
//         } else {
//             // alert("Uh-Oh! Something went wrong, we're on it!")
//         }
//     }
// }





*/