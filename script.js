var pages = prompt("How many pages does the customer want typed?"); 
var turnAround = prompt("When do they want it done? (in hours)"); 
var language = prompt("In what language will you be typing in? (Please type full words like 'Khmer')");
let extraCharge = null;
let ratesLanguage = 0;

// Number of pages
if (pages <= 100) { // upto 100
	ratesPages = 2.5 // per page  
} else if (pages > 100 && pages <= 200) {
	ratesPages = 1.8 // per page
} else if (pages > 200) {
	ratesPages = 1.5 //per page
}

console.log("For " + pages + " pages, my rates will be $" + ratesPages + " per page");

if (language == "Khmer" || language == "khmer") {
	ratesLangauge = 0;
  console.log("For " + language + " language, there is additional rate of $" + ratesLanguage + " per page");
} else if (language == "English" || language == "english") {
	ratesLanguage = 1.5
  console.log("For " + language + " language, there is additional rate of $" + ratesLanguage + " per page");
} else if (language == "Thai" || language == "thai") {
	ratesLanguage = 1.2
  console.log("For " + language + " language, there is additional rate of $" + ratesLanguage + " per page");
} else {
  document.getElementById("errorNotice").style.display = "flex";
  document.getElementById("errorNotice").innerHTML = "<h1 style='margin-top: 25vh'>Cannot type in that language!</h1>"; 
}


ratesTotal = ratesPages + ratesLanguage;

console.log("So, my rates will be $" +  ratesTotal + " per page");


if (turnAround) { //check if turnaround time exists

  if (turnAround == 1 && pages < 5) { 
  //turnaround is in unit hours
    extraCharge = 25;    
  } else if (turnAround == 24 && pages <= 25) {
   //1 day
    extraCharge = 45;

  } else if (turnAround == 36 && pages <= 100) {
    //3 days
    extraCharge = 75;

  } else if (turnAround == 84 && pages <= 200) {
    //1 week
    extraCharge = 120;

  } else if (turnAround > 84) {
    extraCharge = 0;

  }
} else {
	extraCharge = 0;
}

if (extraCharge) {
    console.log("For your turnaround of " + turnAround + " hours, you will be charged an extra of $" + extraCharge)
    price = ratesTotal * pages + extraCharge;    
} else {
    price = ratesTotal * pages;
}

deposit = price / 2

console.log("The total service fee is $" + price) 
document.getElementById("container").innerHTML = "The total service fee is $" + price
console.log("Your customer will need to deposit $" + deposit)
document.getElementById("container1").innerHTML = "Your customer will need to deposit $" + deposit
document.getElementById("pagesNotice").innerHTML = "For " + pages + " pages, my rates will be $" + ratesPages + " per page";
