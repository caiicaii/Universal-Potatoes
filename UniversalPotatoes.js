var potatoes = 0;
var unusedPotatoes = 0;
var farmRate = 0;
var farmRateTemp = 0;
var farmRateTracker = 0;
var farmerRate = 0;
var farmerNumber = 0;
var farmerNumber2 = 0;
var farmerCost = 5;
var maxFarmers = 50;
var baseMaxFarmers = 50;
var farmersPerPlot = 25;
var baseFarmersPerPlot = 25;
var plotFarmerBoost = 1;
var unsoldPotatoes = 0;
var funds = 9E25;
var pricePerPotato = 0.25;
var seeds = 1000;
var seedCost = 15;
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
var seedBasePrice = 15;
var seedPriceCounter = 0;
var propertyFlag = 0;
var property = [];
var propertyAvailable = 100;
var propertyCost = 150;
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
	if (funds >= farmerCost && farmerNumber < maxFarmers) {
		farmerNumber = farmerNumber + 1;
		funds = funds - farmerCost;
		document.getElementById("farmerNumber2").innerHTML = farmerNumber;
	}
	farmerCost = (Math.pow(1.08, farmerNumber) + 5);
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
	propertyCost = (Math.pow(1.1, propertyNumOwned) * 150);
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
	
	if (propertyNumOwned < 6){
		document.getElementById("land6").style.display = "none";
	}
	else{
		document.getElementById("land6").style.display = "";
	}
	
	if (propertyNumOwned < 7){
		document.getElementById("land7").style.display = "none";
	}
	else{
		document.getElementById("land7").style.display = "";
	}
	
	if (propertyNumOwned < 8){
		document.getElementById("land8").style.display = "none";
	}
	else{
		document.getElementById("land8").style.display = "";
	}
	
	if (propertyNumOwned < 9){
		document.getElementById("land9").style.display = "none";
	}
	else{
		document.getElementById("land9").style.display = "";
	}
	
	if (propertyNumOwned < 10){
		document.getElementById("land10").style.display = "none";
	}
	else{
		document.getElementById("land10").style.display = "";
	}
	
	if (propertyNumOwned < 11){
		document.getElementById("land11").style.display = "none";
	}
	else{
		document.getElementById("land11").style.display = "";
	}
	
	if (propertyNumOwned < 12){
		document.getElementById("land12").style.display = "none";
	}
	else{
		document.getElementById("land12").style.display = "";
	}
	
	if (propertyNumOwned < 13){
		document.getElementById("land13").style.display = "none";
	}
	else{
		document.getElementById("land13").style.display = "";
	}
	
	if (propertyNumOwned < 14){
		document.getElementById("land14").style.display = "none";
	}
	else{
		document.getElementById("land14").style.display = "";
	}
	
	if (propertyNumOwned < 15){
		document.getElementById("land15").style.display = "none";
	}
	else{
		document.getElementById("land15").style.display = "";
	}
	
	if (propertyNumOwned < 16){
		document.getElementById("land16").style.display = "none";
	}
	else{
		document.getElementById("land16").style.display = "";
	}
	
	if (propertyNumOwned < 17){
		document.getElementById("land17").style.display = "none";
	}
	else{
		document.getElementById("land17").style.display = "";
	}
	
	if (propertyNumOwned < 18){
		document.getElementById("land18").style.display = "none";
	}
	else{
		document.getElementById("land18").style.display = "";
	}
	
	if (propertyNumOwned < 19){
		document.getElementById("land19").style.display = "none";
	}
	else{
		document.getElementById("land19").style.display = "";
	}
	
	if (propertyNumOwned < 20){
		document.getElementById("land20").style.display = "none";
	}
	else{
		document.getElementById("land20").style.display = "";
	}
	
	if (propertyNumOwned < 21){
		document.getElementById("land21").style.display = "none";
	}
	else{
		document.getElementById("land21").style.display = "";
	}
	
	if (propertyNumOwned < 22){
		document.getElementById("land22").style.display = "none";
	}
	else{
		document.getElementById("land22").style.display = "";
	}
	
	if (propertyNumOwned < 23){
		document.getElementById("land23").style.display = "none";
	}
	else{
		document.getElementById("land23").style.display = "";
	}
	
	if (propertyNumOwned < 24){
		document.getElementById("land24").style.display = "none";
	}
	else{
		document.getElementById("land24").style.display = "";
	}
	
	if (propertyNumOwned < 25){
		document.getElementById("land25").style.display = "none";
	}
	else{
		document.getElementById("land25").style.display = "";
	}
	
	if (propertyNumOwned < 26){
		document.getElementById("land26").style.display = "none";
	}
	else{
		document.getElementById("land26").style.display = "";
	}
	
	if (propertyNumOwned < 27){
		document.getElementById("land27").style.display = "none";
	}
	else{
		document.getElementById("land27").style.display = "";
	}
	
	if (propertyNumOwned < 28){
		document.getElementById("land28").style.display = "none";
	}
	else{
		document.getElementById("land28").style.display = "";
	}
	
	if (propertyNumOwned < 29){
		document.getElementById("land29").style.display = "none";
	}
	else{
		document.getElementById("land29").style.display = "";
	}
	
	if (propertyNumOwned < 30){
		document.getElementById("land30").style.display = "none";
	}
	else{
		document.getElementById("land30").style.display = "";
	}
	
	if (propertyNumOwned < 31){
		document.getElementById("land31").style.display = "none";
	}
	else{
		document.getElementById("land31").style.display = "";
	}
	
	if (propertyNumOwned < 32){
		document.getElementById("land32").style.display = "none";
	}
	else{
		document.getElementById("land32").style.display = "";
	}
	
	if (propertyNumOwned < 33){
		document.getElementById("land33").style.display = "none";
	}
	else{
		document.getElementById("land33").style.display = "";
	}
	
	if (propertyNumOwned < 34){
		document.getElementById("land34").style.display = "none";
	}
	else{
		document.getElementById("land34").style.display = "";
	}
	
	if (propertyNumOwned < 35){
		document.getElementById("land35").style.display = "none";
	}
	else{
		document.getElementById("land35").style.display = "";
	}
	
	if (propertyNumOwned < 36){
		document.getElementById("land36").style.display = "none";
	}
	else{
		document.getElementById("land36").style.display = "";
	}
	
	if (propertyNumOwned < 37){
		document.getElementById("land37").style.display = "none";
	}
	else{
		document.getElementById("land37").style.display = "";
	}
	
	if (propertyNumOwned < 38){
		document.getElementById("land38").style.display = "none";
	}
	else{
		document.getElementById("land38").style.display = "";
	}
	
	if (propertyNumOwned < 39){
		document.getElementById("land39").style.display = "none";
	}
	else{
		document.getElementById("land39").style.display = "";
	}
	
	if (propertyNumOwned < 40){
		document.getElementById("land40").style.display = "none";
	}
	else{
		document.getElementById("land40").style.display = "";
	}
	
	if (propertyNumOwned < 41){
		document.getElementById("land41").style.display = "none";
	}
	else{
		document.getElementById("land41").style.display = "";
	}
	
	if (propertyNumOwned < 42){
		document.getElementById("land42").style.display = "none";
	}
	else{
		document.getElementById("land42").style.display = "";
	}
	
	if (propertyNumOwned < 43){
		document.getElementById("land43").style.display = "none";
	}
	else{
		document.getElementById("land43").style.display = "";
	}
	
	if (propertyNumOwned < 44){
		document.getElementById("land44").style.display = "none";
	}
	else{
		document.getElementById("land44").style.display = "";
	}
	
	if (propertyNumOwned < 45){
		document.getElementById("land45").style.display = "none";
	}
	else{
		document.getElementById("land45").style.display = "";
	}
	
	if (propertyNumOwned < 46){
		document.getElementById("land46").style.display = "none";
	}
	else{
		document.getElementById("land46").style.display = "";
	}
	
	if (propertyNumOwned < 47){
		document.getElementById("land47").style.display = "none";
	}
	else{
		document.getElementById("land47").style.display = "";
	}
	
	if (propertyNumOwned < 48){
		document.getElementById("land48").style.display = "none";
	}
	else{
		document.getElementById("land48").style.display = "";
	}
	
	if (propertyNumOwned < 49){
		document.getElementById("land49").style.display = "none";
	}
	else{
		document.getElementById("land49").style.display = "";
	}
	
	if (propertyNumOwned < 50){
		document.getElementById("land50").style.display = "none";
	}
	else{
		document.getElementById("land50").style.display = "";
	}
	
	if (propertyNumOwned < 51){
		document.getElementById("land51").style.display = "none";
	}
	else{
		document.getElementById("land51").style.display = "";
	}
	
	if (propertyNumOwned < 52){
		document.getElementById("land52").style.display = "none";
	}
	else{
		document.getElementById("land52").style.display = "";
	}
	
	if (propertyNumOwned < 53){
		document.getElementById("land53").style.display = "none";
	}
	else{
		document.getElementById("land53").style.display = "";
	}
	
	if (propertyNumOwned < 54){
		document.getElementById("land54").style.display = "none";
	}
	else{
		document.getElementById("land54").style.display = "";
	}
	
	if (propertyNumOwned < 55){
		document.getElementById("land55").style.display = "none";
	}
	else{
		document.getElementById("land55").style.display = "";
	}
	
	if (propertyNumOwned < 56){
		document.getElementById("land56").style.display = "none";
	}
	else{
		document.getElementById("land56").style.display = "";
	}
	
	if (propertyNumOwned < 57){
		document.getElementById("land57").style.display = "none";
	}
	else{
		document.getElementById("land57").style.display = "";
	}
	
	if (propertyNumOwned < 58){
		document.getElementById("land58").style.display = "none";
	}
	else{
		document.getElementById("land58").style.display = "";
	}
	
	if (propertyNumOwned < 59){
		document.getElementById("land59").style.display = "none";
	}
	else{
		document.getElementById("land59").style.display = "";
	}
	
	if (propertyNumOwned < 60){
		document.getElementById("land60").style.display = "none";
	}
	else{
		document.getElementById("land60").style.display = "";
	}
	
	if (propertyNumOwned < 61){
		document.getElementById("land61").style.display = "none";
	}
	else{
		document.getElementById("land61").style.display = "";
	}
	
	if (propertyNumOwned < 62){
		document.getElementById("land62").style.display = "none";
	}
	else{
		document.getElementById("land62").style.display = "";
	}
	
	if (propertyNumOwned < 63){
		document.getElementById("land63").style.display = "none";
	}
	else{
		document.getElementById("land63").style.display = "";
	}
	
	if (propertyNumOwned < 64){
		document.getElementById("land64").style.display = "none";
	}
	else{
		document.getElementById("land64").style.display = "";
	}
	
	if (propertyNumOwned < 65){
		document.getElementById("land65").style.display = "none";
	}
	else{
		document.getElementById("land65").style.display = "";
	}
	
	if (propertyNumOwned < 66){
		document.getElementById("land66").style.display = "none";
	}
	else{
		document.getElementById("land66").style.display = "";
	}
	
	if (propertyNumOwned < 67){
		document.getElementById("land67").style.display = "none";
	}
	else{
		document.getElementById("land67").style.display = "";
	}
	
	if (propertyNumOwned < 68){
		document.getElementById("land68").style.display = "none";
	}
	else{
		document.getElementById("land68").style.display = "";
	}
	
	if (propertyNumOwned < 69){
		document.getElementById("land69").style.display = "none";
	}
	else{
		document.getElementById("land69").style.display = "";
	}
	
	if (propertyNumOwned < 70){
		document.getElementById("land70").style.display = "none";
	}
	else{
		document.getElementById("land70").style.display = "";
	}
	
	if (propertyNumOwned < 71){
		document.getElementById("land71").style.display = "none";
	}
	else{
		document.getElementById("land71").style.display = "";
	}
	
	if (propertyNumOwned < 72){
		document.getElementById("land72").style.display = "none";
	}
	else{
		document.getElementById("land72").style.display = "";
	}
	
	if (propertyNumOwned < 73){
		document.getElementById("land73").style.display = "none";
	}
	else{
		document.getElementById("land73").style.display = "";
	}
	
	if (propertyNumOwned < 74){
		document.getElementById("land74").style.display = "none";
	}
	else{
		document.getElementById("land74").style.display = "";
	}
	
	if (propertyNumOwned < 75){
		document.getElementById("land75").style.display = "none";
	}
	else{
		document.getElementById("land75").style.display = "";
	}
	
	if (propertyNumOwned < 76){
		document.getElementById("land76").style.display = "none";
	}
	else{
		document.getElementById("land76").style.display = "";
	}
	
	if (propertyNumOwned < 77){
		document.getElementById("land77").style.display = "none";
	}
	else{
		document.getElementById("land77").style.display = "";
	}
	
	if (propertyNumOwned < 78){
		document.getElementById("land78").style.display = "none";
	}
	else{
		document.getElementById("land78").style.display = "";
	}
	
	if (propertyNumOwned < 79){
		document.getElementById("land79").style.display = "none";
	}
	else{
		document.getElementById("land79").style.display = "";
	}
	
	if (propertyNumOwned < 80){
		document.getElementById("land80").style.display = "none";
	}
	else{
		document.getElementById("land80").style.display = "";
	}
	
	if (propertyNumOwned < 81){
		document.getElementById("land81").style.display = "none";
	}
	else{
		document.getElementById("land81").style.display = "";
	}
	
	if (propertyNumOwned < 82){
		document.getElementById("land82").style.display = "none";
	}
	else{
		document.getElementById("land82").style.display = "";
	}
	
	if (propertyNumOwned < 83){
		document.getElementById("land83").style.display = "none";
	}
	else{
		document.getElementById("land83").style.display = "";
	}
	
	if (propertyNumOwned < 84){
		document.getElementById("land84").style.display = "none";
	}
	else{
		document.getElementById("land84").style.display = "";
	}
	
	if (propertyNumOwned < 85){
		document.getElementById("land85").style.display = "none";
	}
	else{
		document.getElementById("land85").style.display = "";
	}
	
	if (propertyNumOwned < 86){
		document.getElementById("land86").style.display = "none";
	}
	else{
		document.getElementById("land86").style.display = "";
	}
	
	if (propertyNumOwned < 87){
		document.getElementById("land87").style.display = "none";
	}
	else{
		document.getElementById("land87").style.display = "";
	}
	
	if (propertyNumOwned < 88){
		document.getElementById("land88").style.display = "none";
	}
	else{
		document.getElementById("land88").style.display = "";
	}
	
	if (propertyNumOwned < 89){
		document.getElementById("land89").style.display = "none";
	}
	else{
		document.getElementById("land89").style.display = "";
	}
	
	if (propertyNumOwned < 90){
		document.getElementById("land90").style.display = "none";
	}
	else{
		document.getElementById("land90").style.display = "";
	}
	
	if (propertyNumOwned < 91){
		document.getElementById("land91").style.display = "none";
	}
	else{
		document.getElementById("land91").style.display = "";
	}
	
	if (propertyNumOwned < 92){
		document.getElementById("land92").style.display = "none";
	}
	else{
		document.getElementById("land92").style.display = "";
	}
	
	if (propertyNumOwned < 93){
		document.getElementById("land93").style.display = "none";
	}
	else{
		document.getElementById("land93").style.display = "";
	}
	
	if (propertyNumOwned < 94){
		document.getElementById("land94").style.display = "none";
	}
	else{
		document.getElementById("land94").style.display = "";
	}
	
	if (propertyNumOwned < 95){
		document.getElementById("land95").style.display = "none";
	}
	else{
		document.getElementById("land95").style.display = "";
	}
	
	if (propertyNumOwned < 96){
		document.getElementById("land96").style.display = "none";
	}
	else{
		document.getElementById("land96").style.display = "";
	}
	
	if (propertyNumOwned < 97){
		document.getElementById("land97").style.display = "none";
	}
	else{
		document.getElementById("land97").style.display = "";
	}
	
	if (propertyNumOwned < 98){
		document.getElementById("land98").style.display = "none";
	}
	else{
		document.getElementById("land98").style.display = "";
	}
	
	if (propertyNumOwned < 99){
		document.getElementById("land99").style.display = "none";
	}
	else{
		document.getElementById("land99").style.display = "";
	}
	
	if (propertyNumOwned < 100){
		document.getElementById("land100").style.display = "none";
	}
	else{
		document.getElementById("land100").style.display = "";
	}
	
	if (propertyNumOwned == 100){
		document.getElementById("buyPropertyDiv").style.display = "none";
		document.getElementById("allPlotsBought").style.display = "";
	}
	else{
		document.getElementById("buyPropertyDiv").style.display = "";
		document.getElementById("allPlotsBought").style.display = "none";
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
	
	if (propertyFlag == 0 && farmerNumber >= 25){
		propertyFlag = 1;
		displayMessage("You are now able to expand your farm.");
		displayMessage("Each plot increases maximum farmers allowed by 25.");
	}
}

function buttonCheck(){
	if (farmerFlag == 0){
		document.getElementById("farmerDiv").style.display = "none";
	}
	else{
		document.getElementById("farmerDiv").style.display = "";
	}
	
	if (researchFlag == 0){
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
	}
	
}

function rateUpdate(){
	farmerRate = farmerNumber * farmerBoost;
	document.getElementById("potatoFarmingRate").innerHTML = Math.floor(farmerRate).toLocaleString();
	farmersPerPlot = baseFarmersPerPlot * plotFarmerBoost;
	document.getElementById("numOfFarmers").innerHTML = farmerNumber;
	maxFarmers = baseMaxFarmers + propertyNumOwned * farmersPerPlot;
	document.getElementById("farmerNumLimit").innerHTML = Math.floor(maxFarmers).toLocaleString();
	document.getElementById("additionalFarmersPerPlot").innerHTML = farmersPerPlot.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 0});
}
	
function adjustSeedPrice(){
    
    seedPriceTimer = seedPriceTimer + 1;
    
    if (seedPriceTimer>250 && seedBasePrice>10){
        seedBasePrice = seedBasePrice - (seedBasePrice/1000);
        seedPriceTimer = 0;
    }
    
    if (Math.random() < .015) {
        seedPriceCounter = seedPriceCounter + 1;
        var seedAdjust = 4*(Math.sin(seedPriceCounter));
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
	popularity = ((.70/pricePerPotato) * advertising);
	popularity = popularity + ((popularity/10)*0);
	landUpdate();
}, 1);
