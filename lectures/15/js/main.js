var bank = {
    depositAmount : 0,
    withdrawAmount : 0,
    typeOfTransaction : 0,
    error : 0,
    totalBalance : 0
};

function setAccountTitle () {
    var name = document.getElementById("title");
    name.innerText = "Junaid Ahmed";
}

function setAccountBalance () {
    var bal = document.getElementById("balance");
    if(bank.totalBalance === 0)
    {
        bal.innerText = "NIL";
    }
    else
    {
        bal.innerText = bank.totalBalance;
    }
}

function setCurrency () {
    var curr = document.getElementById("currency");
    curr.innerText = "PKR";
}

function setIBAN () {
    var IBAN_Num = document.getElementById("IBAN");
    IBAN_Num.innerText = "PKN123456789";
}

function getDeposit () {
    document.getElementById("deposit-msg").innerText = "";
    bank.depositAmount = document.getElementById("deposit").value;
    bank.typeOfTransaction = "credit";
    if (event.which === 13 || event.key === 'Enter')
    {
        bank.depositAmount = parseInt(document.getElementById("deposit").value);
        if(!isNaN(bank.depositAmount)){
            bank.totalBalance += bank.depositAmount;
            setAccountBalance();
            depositTransactionDetails();
        }
        else {
            bank.error = document.getElementById("deposit-msg");
            bank.error.innerText = "Enter a valid number";
        }
    }
}

function withdraw () {
    document.getElementById("withdraw-msg").innerText = "";
    bank.withdrawAmount = document.getElementById("withdraw").value;
    bank.typeOfTransaction = "debit";
    if (event.which == 13 || event.key == 'Enter')
    {
        bank.withdrawAmount = parseInt(document.getElementById("withdraw").value,10);
        if(!isNaN(bank.withdrawAmount)){
            if (bank.withdrawAmount < bank.totalBalance)
            {
                bank.totalBalance -= bank.withdrawAmount;
                setAccountBalance();
                withdrawTransactionDetails();
            }
            else{
                bank.error = document.getElementById("withdraw-msg");
                bank.error.innerText = "Don't have sufficient amount";
            }
        }
        else {
            bank.error = document.getElementById("withdraw-msg");
            bank.error.innerText = "Enter a valid number";
        }
    }
}

function depositTransactionDetails () {
    var addTransaction = document.getElementById("transaction-table");

    addTransaction.innerHTML += "<tr>" + '<th align="left" valign="middle" scope="col" id="Date">' +
         Date() + '</th>' + '<th align="left" valign="middle" scope="col" id="Type">' + bank.typeOfTransaction + '</th>'
        + '<th align="left" valign="middle" scope="col" id="Amount">' + bank.depositAmount + '</th>' +
        '</tr>';

    document.getElementById("deposit").value = "";
}

function withdrawTransactionDetails () {
    var addTransaction = document.getElementById("transaction-table");

    addTransaction.innerHTML += "<tr>" + '<th align="left" valign="middle" scope="col" id="Date">' +
        Date() + '</th>' + '<th align="left" valign="middle" scope="col" id="Type">'
        + bank.typeOfTransaction + '</th>'
        + '<th align="left" valign="middle" scope="col" id="Amount">' + bank.withdrawAmount + '</th>' +
        '</tr>';

    document.getElementById("withdraw").value = "";
}

setAccountTitle();
setCurrency();
setIBAN();
setAccountBalance();
