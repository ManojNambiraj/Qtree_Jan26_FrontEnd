// Event Listeners:

let bank_balance = 0
let amt = 0

function inputChanges(event){
    amt = parseInt(event.target.value)
}

function Deposite(){
    bank_balance += amt
    // console.log("Deposite: ", bank_balance);

    document.getElementById("result").innerText = bank_balance
}

function withdraw(){
    bank_balance -= amt
    // console.log("Withdraw: ", bank_balance);

    document.getElementById("result").innerText = bank_balance
}
