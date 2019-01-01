
var index = 0;

var bank = [{
    title:"Junaid Ahmed"
    ,depositAmount : 0,
    withdrawAmount : 0,
    typeOfTransaction : 0,
    error : 0,
    totalBalance : 115000,
    IBAN:"PKN45878964421",
    Currency:"PKR"
},{
    title:"Faisal Jawad"
    ,depositAmount : 0,
    withdrawAmount : 0,
    typeOfTransaction : 0,
    error : 0,
    totalBalance : 20000,
    IBAN:"PKN45878961234",
    Currency:"PKR"
},{
    title:"Rimsha Imran"
    ,depositAmount : 0,
    withdrawAmount : 0,
    typeOfTransaction : 0,
    error : 0,
    totalBalance : 15000,
    IBAN:"PKN45878964123",
    Currency:"PKR"
},{
    title:"Sana Anjum"
    ,depositAmount : 0,
    withdrawAmount : 0,
    typeOfTransaction : 0,
    error : 0,
    totalBalance : 40000,
    IBAN:"PKN45878964478",
    Currency:"PKR"
}];

function ShowUserDetails()
{
    var userName = document.getElementById("accname").value;
    var itr;
    if (event.which === 13 || event.key === 'Enter')
    {
        for(itr = 0; itr < bank.length; itr++)
        {
            if(bank[itr].title.match(userName))
            {
                index = itr;
                showAccDetails();
            }
        }
    }
}

function showAccDetails() {
    var bal2 = document.getElementById("balance");
    bal2.innerText = bank[index].totalBalance;
    var curr2 = document.getElementById("currency");
    curr2.innerText = bank[index].Currency;
    var IBAN2 = document.getElementById("IBAN");
    IBAN2.innerText = bank[index].IBAN;
}

function setAccountBalance () {
    var bal = document.getElementById("balance");
    bal.innerText = bank[index].totalBalance;
}

function getDeposit () {
    document.getElementById("deposit-msg").innerText = "";
    //bank[index].depositAmount = document.getElementById("deposit").value;
    bank[index].typeOfTransaction = "credit";
    if (event.which === 13 || event.key === 'Enter')
    {
        bank[index].depositAmount = parseInt(document.getElementById("deposit").value);
        if(!isNaN(bank[index].depositAmount)){
            bank[index].totalBalance += bank[index].depositAmount;
            setAccountBalance(index);
            depositTransactionDetails(index);
        }
        else {
            bank[index].error = document.getElementById("deposit-msg");
            bank[index].error.innerText = "Enter a valid number";
        }
    }
}

function withdraw () {
    document.getElementById("withdraw-msg").innerText = "";
    //bank[index].withdrawAmount = document.getElementById("withdraw").value;
    bank[index].typeOfTransaction = "debit";
    if (event.which == 13 || event.key == 'Enter')
    {
        bank[index].withdrawAmount = parseInt(document.getElementById("withdraw").value,10);
        if(!isNaN(bank[index].withdrawAmount)){
            if (bank[index].withdrawAmount < bank[index].totalBalance)
            {
                bank[index].totalBalance -= bank[index].withdrawAmount;
                setAccountBalance(index);
                withdrawTransactionDetails(index);
            }
            else{
                bank[index].error = document.getElementById("withdraw-msg");
                bank[index].error.innerText = "Don't have sufficient amount";
            }
        }
        else {
            bank[index].error = document.getElementById("withdraw-msg");
            bank[index].error.innerText = "Enter a valid number";
        }
    }
}

function depositTransactionDetails () {
    var addTransaction = document.getElementById("transaction-table");

    addTransaction.innerHTML += "<tr>" + '<th align="left" valign="middle" scope="col" id="Date">' +
        Date() + '</th>' + '<th align="left" valign="middle" scope="col" id="Type">'
        + bank[index].title + '</th>' +
        '<th align="left" valign="middle" scope="col" id="Type">' + bank[index].typeOfTransaction + '</th>'
        + '<th align="left" valign="middle" scope="col" id="Amount">' + bank[index].depositAmount + '</th>' +
        '</tr>';

    document.getElementById("deposit").value = "";
}

function withdrawTransactionDetails (index) {
    var addTransaction = document.getElementById("transaction-table");

    addTransaction.innerHTML += "<tr>" + '<th align="left" valign="middle" scope="col" id="Date">' +
        Date() + '</th>' + '<th align="left" valign="middle" scope="col" id="Type">'
        + bank[index].title + '</th>' + '<th align="left" valign="middle" scope="col" id="Type">'
        + bank[index].typeOfTransaction + '</th>'
        + '<th align="left" valign="middle" scope="col" id="Amount">' + bank[index].withdrawAmount + '</th>' +
        '</tr>';

    document.getElementById("withdraw").value = "";
}

document.getElementById("balance").innerText = "NIL";