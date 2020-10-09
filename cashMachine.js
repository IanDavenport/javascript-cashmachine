

//  VARIABLE SET-UP
let userChosenPIN = 1234;
let userBalance = 1035.33;
let dailyWithdrawLimit = 300; 
let enteredPIN;
// let pinChecker;
// let pinWrong;
// let bankOptions;
// let pinRWrong;



//  INITAL WELCOME MESSAGE
const welcome = () => {
    alert('Welcome to The Dodgy Bank');
    pinRequest(); 
}


// ASKS FOR THE USER PIN
const pinRequest = () => {
    let enteredPIN = prompt(`Please enter your PIN`);
    alert(`You entered ${enteredPIN}`);    
    pinChecker();                               
}


//  VERIFIES THE PIN
// const pinChecker = () => {
//     if (enteredPIN === userChosenPIN) {
//         alert(`PIN entered correctly`)
//         bankOptions()
//     } else {
//         pinWrong()
//     }
// }


//  VERIFIES THE PIN
const pinChecker = () => {
    if (enteredPIN !== userChosenPIN) {
        pinWrong()
    } else {
        bankOptions()
    }
}


//  IF WRONG PIN - SHOULD SEND HERE
const pinWrong = () => {
    alert(`You entered an incorrect PIN. Please try again`);
    // pinRequest() <<< COMMENTED THE REQUEST TO STOP IT CYCLING  ... BUT DOES IT STILL CYCLE ??

}


// GIVES OPTIONS TO SELECT FROM
const bankOptions = () => {
    let choice = prompt(`Please make a selection - 1: Withdraw money. 2: Check Balance. 3: Log-off`)
    if (choice == 1) {
        withdraw()
    } else if (choice == 2) {
        balance()
    } else if (choice == 3) {
        welcome()
    } else {
        alert(`I don't understand. Please select again`)
        bankOptions()
    }
}


//  WITHDRAW FUNDS FUNCTION
const withdraw = () => {
    let cashRequest = prompt(`You have £${userBalance} and can withdraw ${dailyWithdrawLimit} today. How much would you like to withdraw ?`)
    if (cashRequest <= dailyWithdrawLimit && cashRequest <= userBalance) {
        cashDeduct()
    } else {
        withdraw()
    }
}


//  DEDUCTS WITHDRAWN CASH AMOUNT FROM USER-BALANCE
const cashDeduct = () => {
    userBalance-=cashRequest;
    dailyWithdrawLimit-=cashRequest;
    alert(`Please take your ${cashRequest}`)
    setTimeout(() => {
    }, 2000);
    balance()    
}



//  USER BALANCE ENQUIRY FUNCTION
const balance = () => {
    prompt(`Your balance is £${userBalance}`)
    setTimeout(() => {
    }, 5000);
    bankOptions()
}


welcome()
// bankOptions()


