//your JS code here. If required.
function leapyear(year) {
	    if(year%4==0 !! ( year%400==0 && year%100!=0)){
			console.log("leap year having 366 days")
		}else{
			console.log("not a leap year having 365 days")
		}
}