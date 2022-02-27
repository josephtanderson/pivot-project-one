const prompt = document.getElementById("prompt-area");
const respond = document.getElementById("response-area");

const nameRespond = document.getElementById("response-name");
const orderRespond = document.getElementById("response-order");
const timeRespond = document.getElementById("response-time");
const statusRespond = document.getElementById("response-status");
const endRespond = document.getElementById("response-end");

const userInput = document.getElementById("user-input");
const form = document.getElementById('form');
const log = document.getElementById('log');
let responseLog = "";
let x=0;

prompt.textContent = "Please enter your first name.";
userInput.value = "";
const regex = /^y(?=e(?=s))/gim;
let confirmation = "";
let first = "";
let last = "";
let orderPlaced = "";
let test ="";
let orderTime = "";
let orderStatus = "";
let reciept = "";

form.addEventListener('submit', formSubmit);


function formSubmit(event) {
    if (x === 0) {
        first = userInput.value;
        if (first === null || first === "") {
            alert("Please enter a valid name.");
            x=0;
        } else {
            responseLog = "Name: " + first ;
            nameRespond.textContent = responseLog;
            prompt.textContent = "Please enter your last name.";
            x++;
        }
        userInput.value = "";
    } else if (x === 1) {
        last = userInput.value;
        if (last === null || last === "") {
            alert("Please enter a valid name.")
            prompt.textContent = "Please enter your first name.";
            nameRespond.textContent = "";
            x=0;
        } else {
            responseLog += " " + last;
            nameRespond.textContent = responseLog;
            prompt.textContent = 'Have you placed your order yet? Please type: "yes" or "no"';
            x++;
        }
        userInput.value = "";
    }  else if (x === 2) {
        orderPlaced = userInput.value;
        test = regex.test(orderPlaced);
        console.log(test);
        responseLog = "Order Placed: " + test;
        orderRespond.textContent =  responseLog;
        prompt.textContent = 'How long ago, in minutes, did you place your order?';
        userInput.value = "";
        if (test) {
            x++;
        } else {
            alert("Well, we would love to make you a pizza, call and place an order to get started!");
            nameRespond.textContent = "";
            orderRespond.textContent = "";
            prompt.textContent = "Please enter your first name.";
            x=0;
        }
    }  else if (x === 3) {
        orderTime = userInput.value;
        responseLog = "Order placed " + orderTime + " minutes ago.";
        timeRespond.textContent = responseLog;
        orderTime = Number(orderTime);
        if (orderTime <= 0) {
            // alert("Hang tight, don't be impatient");
            orderStatus = "Error";
            } else if (orderTime <= 5) {
            orderStatus = "Order Placed";
            } else if (orderTime <= 10) {
            orderStatus = "Preparing Pizza";
            } else if (orderTime <= 15) {
            orderStatus = "In Oven";
            } else if (orderTime <= 20) {
            orderStatus = "Boxing";
            } else if (orderTime >20 && orderTime <= 45) {
            orderStatus = "Out for Delivery";
            } else {
                orderStatus = "Error";
                x=0;
            }
        responseLog = "Order Status: " + orderStatus;
        userInput.value = "";
        if (orderStatus === "Order Placed") {
            // Utilize the Alert Method for each happy case that is met.
            alert('Order Status: ' + orderStatus + ". We have your order! Let's get this party started!")
        } else if (orderStatus === "Preparing Pizza") {
            // Utilize the Alert Method for each happy case that is met.
            alert('Order Status: ' + orderStatus + ". We are preparing our finest ingredients fresh for you!")
        } else if (orderStatus === "In Oven") {
            // Utilize the Alert Method for each happy case that is met.
            alert('Order Status: ' + orderStatus + ". Is it hot in here? No, that is just our brick oven cooking your pie to perfection!")
        } else if (orderStatus === "Boxing") {
            // Utilize the Alert Method for each happy case that is met.
            alert('Order Status: ' + orderStatus + ". We're tucking your pizza in for a safe trip home!")
        } else if (orderStatus === "Out for Delivery") {
            prompt.textContent = 'Have you recieved your pizza?';
        } else {
            orderStatus = "Error"
        }
        responseLog = "Order Status: " + orderStatus;
        statusRespond.textContent = responseLog;
        userInput.value = "";
        x++;
    } else if (x === 4) {
        console.log(userInput.value);     
        reciept = userInput.value;
        test = regex.test(reciept);
        console.log(test);
        if (test) {
            orderStatus = "Delivered";
        } else {
            orderStatus = "Out for Delivery";
            endRespond.textContent = "line 130";
        }
        if (orderStatus === "Delivered") {
            responseLog = "Order Status: " + orderStatus;
            statusRespond.textContent = responseLog;
            // Utilize the Alert Method for each happy case that is met.
            alert("Pizza Party time!");
            responseLog = "Pizza Party time!"; 
            } else if (orderStatus === "Out for Delivery") {
                responseLog = "Order Status: " + orderStatus;
                statusRespond.textContent = responseLog;
                responseLog = "Hang tight, almost there!"; 
                endRespond.textContent = responseLog;
            }
            userInput.value = "";
    } else {
        alert("Uh-Oh! Something went wrong, we're on it!");
        nameRespond.textContent = "";
        orderRespond.textContent = "";
        timeRespond.textContent = "";
        statusRespond.textContent = "";
        endRespond.textContent = "";
        prompt.textContent = "Please enter your first name.";
        x=0;
    }
    event.preventDefault();


}



// function firstNameSubmit(event) {
//     first = userInput.value;
//     console.log(userInput.value);
//     responseLog = "Name: " + first;
//     respond.textContent = responseLog;
//     prompt.textContent = "Please enter your Last name.";
//     userInput.value = "";
//     event.preventDefault();
// }
// function lastNameSubmit(event) {
//     prompt.textContent = 'Have you placed your order yet? Please type: "yes" or "no"';
//     userInput.value = "";
//     event.preventDefault();
//     form.addEventListener('submit', orderPlacedSubmit);
// }
// function orderPlacedSubmit(event) {
//     prompt.textContent = "How long ago, in minutes, did you order?";
//     userInput.value = "";
//     event.preventDefault();
// }
// function orderTimeSubmit(event) {
//     prompt.textContent = "Something went wrong";
//     userInput.value = "";
//     event.preventDefault();
// }
// function recieptSubmit(event) {
//     prompt.textContent = "Something went wrong";
//     userInput.value = "";
//     event.preventDefault();
//

    // // At least 5 different If cases.
    // let last = prompt("Last Name:");
    // //1 --- utilize the && and the || operators at least once
    // if (first === "" || last === "" || first === null || last === null) {
    //     alert("Something went wrong, please reload the page and try again");
    // } else {
    //     alert("Hello, " + first + "! Let's check on your order!");
    //     console.log("Order Name : " + first + " " + last);
    //     let orderPlaced = prompt("Have you placed your order yet, " + name + '? Please type: "yes" or "no"');
    //     let test = regex.test(orderPlaced);
    //     console.log("Order Placed? : " + test);
    //     //2
    //     if (!test) {
    //         alert("Well, we would love to make you a pizza, call and place an order to get started!");
    //     } else {
    //             //3
    //             if (test) { 
    //             let orderTime = prompt("How long ago, in minutes, did you order?");
    //             orderTime = Number(orderTime);
    //             console.log("Order placed " + orderTime + " minutes ago.");
    //             let orderStatus = "";
    //             //4
    //             if (orderTime === 0) {
    //                 alert("Hang tight, don't be impatient");
    //                 orderStatus = "Error";
    //                 } else if (orderTime <= 5) {
    //                 orderStatus = "Order Placed";
    //                 } else if (orderTime <= 10) {
    //                 orderStatus = "Preparing Pizza";
    //                 } else if (orderTime <= 15) {
    //                 orderStatus = "In Oven";
    //                 } else if (orderTime <= 20) {
    //                 orderStatus = "Boxing";
    //                 // --- utilize the && and the || operators at least once
    //                 } else if (orderTime >20 && orderTime <= 45) {
    //                 orderStatus = "Out for Delivery";
    //                 } else {
    //                     let reciept = prompt("Have you recieved your pizza?");
    //                     //5
    //                     if (regex.test(reciept)) {
    //                         orderStatus = "Delivered";
    //                     } else {
    //                         orderStatus = "Error";
    //                     }
    //                 }
    //                 console.log("Order Status: " +orderStatus);
    //             //6
    //             if (orderStatus === "Order Placed") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("We have your order! Let's get this party started!")
    //             } else if (orderStatus === "Preparing Pizza") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("We are preparing our finest ingredients fresh for you!")
    //             } else if (orderStatus === "In Oven") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("Is it hot in here? No, that is just our brick oven cooking your pie to perfection!")
    //             } else if (orderStatus === "Boxing") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("We're tucking your pizza in for a safe trip home!")
    //             } else if (orderStatus === "Out for Delivery") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("Hang tight, almost there!")
    //             } else if (orderStatus === "Delivered") {
    //                 // Utilize the Alert Method for each happy case that is met.
    //                 alert("Pizza Party time!")
    //                 } else {
    //                     alert("Uh-Oh! Something went wrong, we're on it!")            
    //             }
                
    //         }
    //     }
    // }
    // console.log("Thank you for your order!");