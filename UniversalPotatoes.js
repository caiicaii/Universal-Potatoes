var potatoes = 0;
var unusedPotatoes = 0;
var farmRate = 0;
var farmRateTemp = 0;
var farmRateTracker = 0;
var farmerRate = 0;
var farmerNumber = 0;
var farmerNumber2 = 0;
var farmerCost = 5;
var maxFarmerRate = 5000;
var unsoldPotatoes = 0;
var funds = 9E18;
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
var achievementLevel = 0;
var farmerFlag = 0;
var farmerBoost = 1;
var researchFlag = 0;
var upgradesFlag = 0;
var seedPriceTimer = 0;
var seedBasePrice = 20;
var seedPriceCounter = 0;
var propertyFlag = 0;
var property = [];
var propertyAvailable = 100;
var propertyCost = 3000;
var currentPropertyNum = 1;
var propertyNumOwned = 0;

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
	document.getElementById("popularity").innerHTML = popularity.toFixed(2);
	document.getElementById("pricePerPotato").innerHTML = pricePerPotato.toFixed(2);
}

function decPrice(){
	if (pricePerPotato > 0.01){
		pricePerPotato = (Math.round((pricePerPotato - 0.01)*100))/100;
		document.getElementById("popularity").innerHTML = popularity.toFixed(2);
		document.getElementById("pricePerPotato").innerHTML = pricePerPotato.toFixed(2);
	}
}

function buyFarmer(){
	if (funds >= farmerCost && farmerRate < maxFarmerRate) {
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

function buyProperty(number){
	if (funds >= propertyCost && propertyAvailable > 0){
		propertyAvailable = propertyAvailable - 1;
		funds = funds - propertyCost;
		property.push(currentPropertyNum);
		currentPropertyNum = currentPropertyNum + 1;
		propertyNumOwned = propertyNumOwned + 1;
		document.getElementById("propertyOwned").innerHTML = propertyNumOwned;
		document.getElementById("propertyRemaining").innerHTML = propertyAvailable;
	}
	if (propertyNumOwned < 10){
		propertyCost = (Math.pow(1.1, propertyNumOwned) * 3000);
	}
	else if (propertyNumOwned < 25) {
		propertyCost = ((Math.pow(1.08, propertyNumOwned) * 3000) + 1300);
	}
	else{
		propertyCost = ((Math.pow(1.06, propertyNumOwned) * 3000) + 9000);
	}
	document.getElementById("propertyCost").innerHTML = propertyCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
	document.getElementById("availableFunds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function statisticsUpdate(){
	if (seeds == 1){
		document.getElementById("numOfSeeds").innerHTML = "seed";
	}
	else{
		document.getElementById("numOfSeeds").innerHTML = "seeds";
	}
	document.getElementById("availableFunds").innerHTML = funds.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:
	2});
	document.getElementById("unsoldPotatoes").innerHTML = Math.floor(unsoldPotatoes).toLocaleString();
	document.getElementById("popularity").innerHTML = (popularity*10).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
	document.getElementById("potatoes").innerHTML = Math.ceil(potatoes).toLocaleString();
}

function landUpdate(){
	if (propertyNumOwned < 1){
		document.getElementById("land1").style.display = "none";
	}
	else{
		document.getElementById("land1").style.display = "";
	}
	
	if (propertyNumOwned < 2){
		document.getElementById("land2").style.display = "none";
	}
	else{
		document.getElementById("land2").style.display = "";
	}
	
	if (propertyNumOwned < 3){
		document.getElementById("land3").style.display = "none";
	}
	else{
		document.getElementById("land3").style.display = "";
	}
	
	if (propertyNumOwned < 4){
		document.getElementById("land4").style.display = "none";
	}
	else{
		document.getElementById("land4").style.display = "";
	}
	
	if (propertyNumOwned < 5){
		document.getElementById("land5").style.display = "none";
	}
	else{
		document.getElementById("land5").style.display = "";
	}
}
		
function displayMessage(msg){
    document.getElementById("readout5").innerHTML=document.getElementById("readout4").innerHTML;
    document.getElementById("readout4").innerHTML=document.getElementById("readout3").innerHTML;
    document.getElementById("readout3").innerHTML=document.getElementById("readout2").innerHTML;
    document.getElementById("readout2").innerHTML=document.getElementById("readout1").innerHTML;
    document.getElementById("readout1").innerHTML=msg;
}

function achievementCheck(){
	if (achievementLevel == 0 && funds >= 5){
		achievementLevel = achievementLevel + 1;
		farmerFlag = 1;
		displayMessage("Farmers can now be hired.");
	}
	
	if (researchFlag == 0 && Math.ceil(potatoes) >= 2000){
		researchFlag = 1;
		upgradesFlag = 1;
		displayMessage("Research options are now available.");
	}
	
	if (researchFlag == 0 && unsoldPotatoes < 1 && funds < seedCost && seeds < 1){
		researchFlag = 1;
		upgradesFlag = 1;
		displayMessage("Research options are now available.");
	}
	
	if (propertyFlag == 0 && farmerRate >= 1000){
		propertyFlag = 1;
		displayMessage("You are now able to expand your farm.");
		displayMessage("Each plot increases maximum farmer rate by 5000.");
	}
}

function buttonCheck(){
	if (farmerFlag == 0){
		document.getElementById("farmerDiv").style.display = "none";
	}
	else{
		document.getElementById("farmerDiv").style.display = "";
	}
	
	/*if (researchFlag == 0){
		document.getElementById("researchDiv").style.display = "none";
	}
	else{
		document.getElementById("researchDiv").style.display = "";
	}
	
	if (propertyFlag == 0){
		document.getElementById("propertyDiv").style.display = "none";
	}
	else{
		document.getElementById("propertyDiv").style.display = "";
	}*/
	
}

function rateUpdate(){
	farmerRate = farmerNumber * farmerBoost;
	document.getElementById("potatoFarmingRate").innerHTML = Math.floor(farmerRate).toLocaleString();
}
	
function adjustSeedPrice(){
    
    seedPriceTimer = seedPriceTimer + 1;
    
    if (seedPriceTimer>250 && seedBasePrice>15){
        seedBasePrice = seedBasePrice - (seedBasePrice/1000);
        seedPriceTimer = 0;
    }
    
    if (Math.random() < .015) {
        seedPriceCounter = seedPriceCounter + 1;
        var seedAdjust = 6*(Math.sin(seedPriceCounter));
        seedCost = Math.ceil(seedBasePrice + seedAdjust);
        document.getElementById("seedsCost").innerHTML = seedCost;
        }
}

window.setInterval(function(){
	if (Math.random() < (popularity/100)){
		sellPotatoes(Math.floor(.7 * Math.pow(popularity, 1.15)));
	}
	adjustSeedPrice()
}, 100);

window.setInterval(function(){
	rateUpdate();
	clickPotatoes(farmerBoost * (farmerNumber/1000));
	buttonCheck();
	statisticsUpdate();
	achievementCheck();
	advertising = (Math.pow(1.1, (advertisingLevel - 1)));
	popularity = ((.8/pricePerPotato) * advertising);
	popularity = popularity + ((popularity/10)*0);
	landUpdate();
}, 1);
