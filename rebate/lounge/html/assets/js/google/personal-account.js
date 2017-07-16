document.getElementById('accountCurrentBalance').innerHTML = getCurrentBalance();
document.getElementById('accountTradedLots').innerHTML = getTradedLots();
document.getElementById('accountAffiliateCount').innerHTML = getAffiliateCount();
document.getElementById('accountAffiliateProfit').innerHTML = getAfiliateProfit();

document.getElementById('accountOwner').innerHTML = "Michael Spanncer";



document.getElementById('systemCustomerCount').innerHTML = "810";
document.getElementById('systemCustomersGrow').innerHTML = "33%";

var squel = require("squel");




function getAccountInformation(accountIdent) {
	return 0;
}

//
// Account finance overview
//

function getCurrentBalance() {
	return "$149.99";
}

function getTradedLots() {
	return "19.02"
}

function getAffiliateCount() {
	return "1";
}

function getAfiliateProfit() {
	return "$19.99";
}