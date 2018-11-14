var potatoes = 0;
var unusedPotatoes = 0;
var farmRate = 0;
var farmRateTemp = 0;
var farmRateTracker = 0;
var farmerRate = 0;
var farmerNumber = 0;
var farmerNumber2 = 0;
var farmerCost = 5;
var unsoldPotatoes = 0;
var funds = 20;
var pricePerPotato = 0.25;
var seeds = 1000;
var seedCost = 20;
var adCost = 100;
var popularity = 5;
var potatoesSold = 0;
var avgRev = 0;
var income = 0;
var incomeTracker = [0];
var advertising = 1;
var advertisingLevel = 1;
var incomePerSale = 1;
var research = 0;


function clickPotatoes(number){
	if (seeds >= 1); {
		if (number > seeds) {
			number = seeds;
		}
		
		potatoes = potatoes + number;
		unsoldPotatoes = unsoldPotatoes + number;
		seeds = seeds - number;
		unusedPotatoes = unusedPotatoes + number;
		
		document.getElementById("seeds").innerHTML = Math.floor(seeds).toLocaleString();
		document.getElementById("unsoldPotatoes").innerHTML = Math.floor(potatoes).toLocaleString();
		document.getElementById("potatoes").innerHTML = Math.floor(potatoes).toLocaleString();
	}
}

function sellPotatoes(number){
	if (unsoldPotatoes > 0){
		if (number > unsoldPotatoes){
			number = unsoldPotatoes;
			incomePerSale = (Math.floor((number * pricePerPotato)*1000))/1000;
			funds = (Math.floor((funds + incomePerSale)*100))/100;
			income = income + incomePerSale;
			potatoesSold = potatoesSold + number;
			unsoldPotatoes = 0;
		}
		else{
			incomePerSale = (Math.floor((number * pricePerPotato)*1000))/1000;
			funds = (Math.floor((funds + incomePerSale)*100))/100;
			income = income + incomePerSale;
			potatoesSold = potatoesSold + number;
			unsoldPotatoes = unsoldPotatoes - number;
		}
	}
}

function incPrice(){
	pricePerPotato = (Math.round((pricePerPotato + 0.01)*100))/100;
	//document.getElementById("popularity").innerHTML = popularity.toFixed(2);
	document.getElementById("pricePerPotato").innerHTML = pricePerPotato.toFixed(2);
}

function decPrice(){
	if (pricePerPotato > 0.01){
		pricePerPotato = (Math.round((pricePerPotato - 0.01)*100))/100;
		//document.getElementById("popularity").innerHTML = popularity.toFixed(2);
		document.getElementById("pricePerPotato").innerHTML = pricePerPotato.toFixed(2);
	}
}

function buyFarmer(){
	if (funds >= farmerCost) {
		farmerNumber = farmerNumber + 1;
		funds = funds - farmerCost;
		document.getElementById("farmerNumber2").innerHTML = farmerNumber;
	}
	farmerCost = (Math.pow(1.1, farmerNumber) + 5);
	document.getElementById("farmerCost").innerHTML = farmerCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
	document.getElementById("availableFunds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function buySeeds(){
	if (funds >= seedCost) {
		seeds = seeds + 1000;
		funds = funds - seedCost;
		document.getElementById("seeds").innerHTML = seeds;
	}
	document.getElementById("availableFunds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function sellPotatoes(number){
    if (unsoldPotatoes > 0) {
        if (number > unsoldPotatoes){
			number = unsoldPotatoes;
			incomePerSale = (Math.floor((number * pricePerPotato)*1000))/1000;   
			funds = (Math.floor((funds + incomePerSale)*100))/100;
			income = income + incomePerSale;    
			potatoesSold = potatoesSold + number;    
			unsoldPotatoes = 0;
        } else {
			incomePerSale = (Math.floor((number * pricePerPotato)*1000))/1000;    
			funds = (Math.floor((funds + incomePerSale)*100))/100;
			income = income + incomePerSale;      
			potatoesSold = potatoesSold + number;    
			unsoldPotatoes = unsoldPotatoes - number;       
        }
    } 
}

function statisticsUpdate() {
	document.getElementById("availableFunds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:
	2});
	document.getElementById("unsoldPotatoes").innerHTML = Math.floor(unsoldPotatoes).toLocaleString();
}

window.setInterval(function(){
	if (Math.random() < 0.05){
		sellPotatoes(2);
	}
}, 100);

window.setInterval(function(){
	statisticsUpdate()
}, 0.1);
