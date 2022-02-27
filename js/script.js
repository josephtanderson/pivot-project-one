const regex = /^y(?=e(?=s))/gim;

let first = prompt("First Name:");
if (first === null) {
    console.log("Pizza Party: Opt Out.")
} else {
    // At least 5 different If cases.
    let last = prompt("Last Name:");
    //1 --- utilize the && and the || operators at least once
    if (first === "" || last === "" || first === null || last === null) {
        alert("Something went wrong, please reload the page and try again");
    } else {
        alert("Hello, " + first + "! Let's check on your order!");
        console.log("Order Name : " + first + " " + last);
        let orderPlaced = prompt("Have you placed your order yet, " + name + '? Please type: "yes" or "no"');
        let test = regex.test(orderPlaced);
        console.log("Order Placed? : " + test);
        //2
        if (!test) {
            alert("Well, we would love to make you a pizza, call and place an order to get started!");
        } else {
                //3
                if (test) { 
                let orderTime = prompt("How long ago, in minutes, did you order?");
                orderTime = Number(orderTime);
                console.log("Order placed " + orderTime + " minutes ago.");
                let orderStatus = "";
                //4
                if (orderTime === 0) {
                    alert("Hang tight, don't be impatient");
                    orderStatus = "Error";
                    } else if (orderTime <= 5) {
                    orderStatus = "Order Placed";
                    } else if (orderTime <= 10) {
                    orderStatus = "Preparing Pizza";
                    } else if (orderTime <= 15) {
                    orderStatus = "In Oven";
                    } else if (orderTime <= 20) {
                    orderStatus = "Boxing";
                    // --- utilize the && and the || operators at least once
                    } else if (orderTime >20 && orderTime <= 45) {
                    orderStatus = "Out for Delivery";
                    } else {
                        let reciept = prompt("Have you recieved your pizza?");
                        //5
                        if (regex.test(reciept)) {
                            orderStatus = "Delivered";
                        } else {
                            orderStatus = "Error";
                        }
                    }
                    console.log("Order Status: " +orderStatus);
                //6
                if (orderStatus === "Order Placed") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("We have your order! Let's get this party started!")
                } else if (orderStatus === "Preparing Pizza") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("We are preparing our finest ingredients fresh for you!")
                } else if (orderStatus === "In Oven") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("Is it hot in here? No, that is just our brick oven cooking your pie to perfection!")
                } else if (orderStatus === "Boxing") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("We're tucking your pizza in for a safe trip home!")
                } else if (orderStatus === "Out for Delivery") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("Hang tight, almost there!")
                } else if (orderStatus === "Delivered") {
                    // Utilize the Alert Method for each happy case that is met.
                    alert("Pizza Party time!")
                    } else {
                        alert("Uh-Oh! Something went wrong, we're on it!")            
                }
                
            }
        }
    }
    console.log("Thank you for your order!");
}