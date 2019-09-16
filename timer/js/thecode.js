/*
thetitanteam.com - Information about your school day
By Jaeheon Shim
Javascript
*/

function SecDiff(CurrentDate) {
	var TYear=CurrentDate.getFullYear();
        var TDay=new Date("2020-05-28T15:05:00-04:00");
        TDay.getFullYear(TYear);
        var DayCount=(TDay-CurrentDate)/(1000);
        DayCount=Math.round(DayCount); 
    return(DayCount);
}


var day = 86400;
var twohour = false;
var splittime, hours, minutes, seconds, hourselapsed, minuteselapsed, secondselapsed, absoluteTime, timeformat;
var timebox, subs, homework, timer, subscriberbox, homeworkbox
function main() {
	/*
		//checkboxes
		timebox = document.getElementById("ti");
		subs = document.getElementById("sb");
		homework = document.getElementById("hw");

	//divs
	timer = document.getElementById("schedule-box");
	subscriberbox = document.getElementById("subs");
	homeworkbox = document.getElementById("homeworkbox");

	if(getCookie("timer") == "show") {
		timebox.checked = true;
	}

	if(getCookie("subs") == "show") {
		subs.checked = true;
	}

	if(getCookie("homework") == "show") {
		homework.checked = true;
	}
*/
	setInterval(updates, 1000);
	setInterval(updateSubscribers, 2000);
	if(twohour == true) {
		document.getElementById("message").innerHTML = "Two Hour Delay";
	}
	else if(twohour == false){
		document.getElementById("message").innerHTML = "Normal Schedule";
	}
	else {
		document.getElementById("message").innerHTML = "Schedule Error";
		document.getElementById("message").style.border = "10px solid red";
	}

	function updates() {
		//customize();
		schoolEndsIn();
		preferredTime();
		updateMainTime();
		updateTimeLeft();
		updateTimeElapsed();
		getPeriod();
		setTimeLeftInPeriod();
		splittime = time().split(":");
		hours = parseInt(splittime[0]);
		minutes = parseInt(splittime[1]);
		seconds = parseInt(splittime[2]);
		absoluteTime = hoursToSeconds(hours) + minutesToSeconds(minutes) + seconds;
	}
}
function minTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
}

function parseTimeToSecs(input){ 
	//make my life easier
	var split = input.split(":");
	return split[0] * 3600 + split[1] * 60
}

function getPeriod() {
	/* 
	Timetable for Titan team
	Period 1: 7:50 AM - 8:40 AM
	Period 2: 8:45 AM - 9:30 AM
	Period 3: 9:35 AM - 10:20 AM
	Period 4: 10:25 AM - 11:10 AM
	Period 5: 11:15 AM - 11:45 AM
	Period 6: 11:50 AM - 12:35 PM
	Period 7: 12:40 PM - 1:25 PM
	Period 8: 1:30 PM - 2:15 PM
	Period 9: 2:20 PM - 3:05 PM

	=============================

	TWO HOUR DELAY SCHEDULE:
	Period 1: 9:50 AM - 10:25 AM
	Period 2: 10:30 AM - 11:00 AM
	Period 3: 11:05 AM - 11:35 AM
	Period 5: 11:40 AM - 12:10 PM
	Period 6: 12:15 PM - 12:45 PM
	Period 7: 12:50 PM - 1:20 PM
	Period 4: 1:25 PM - 1:55 PM
	Period 8: 2:00 PM - 2:30 PM
	Period 9: 2:35 PM - 3:05 PM
	*/
	//console.log(secondselapsed);
	if(twohour == false) {
		if (absoluteTime < parseTimeToSecs("8:30") && absoluteTime > parseTimeToSecs("7:45")) {
			document.getElementById("current-class").innerHTML = "Period 1";
		}
		if (absoluteTime > parseTimeToSecs("8:30") && absoluteTime < parseTimeToSecs("8:36")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 2)";
		}
		if (absoluteTime > parseTimeToSecs("8:36") && absoluteTime < parseTimeToSecs("9:21")) {
			document.getElementById("current-class").innerHTML = "Period 2";
		}
		if (absoluteTime > parseTimeToSecs("9:21") && absoluteTime < parseTimeToSecs("9:27")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 3)";
		}
		if (absoluteTime > parseTimeToSecs("9:27") && absoluteTime < parseTimeToSecs("10:12")) {
			document.getElementById("current-class").innerHTML = "Period 3";
		}
		if (absoluteTime > parseTimeToSecs("10:12") && absoluteTime < parseTimeToSecs("10:18")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 4)";
		}
		if (absoluteTime > parseTimeToSecs("10:18") && absoluteTime < parseTimeToSecs("11:06")) {
			document.getElementById("current-class").innerHTML = "Period 4";
		}
		if (absoluteTime > parseTimeToSecs("11:06") && absoluteTime < parseTimeToSecs("11:12")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 5)";
		}
		if (absoluteTime > parseTimeToSecs("11:12") && absoluteTime < parseTimeToSecs("11:57")) {
			document.getElementById("current-class").innerHTML = "Period 5 (Lunch A)";
		}
		if (absoluteTime > parseTimeToSecs("11:57") && absoluteTime < parseTimeToSecs("12:42")) {
			document.getElementById("current-class").innerHTML = "Period 5 (Lunch C)";
		}
		if (absoluteTime > parseTimeToSecs("12:42") && absoluteTime < parseTimeToSecs("12:48")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 6)";
		}
		if (absoluteTime > parseTimeToSecs("12:48") && absoluteTime < parseTimeToSecs("13:33")) {
			document.getElementById("current-class").innerHTML = "Period 6";
		}
		if (absoluteTime > parseTimeToSecs("13:33") && absoluteTime < parseTimeToSecs("13:39")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 7)";
		}
		if (absoluteTime > parseTimeToSecs("13:39") && absoluteTime < parseTimeToSecs("14:24")) {
			document.getElementById("current-class").innerHTML = "Period 7";
		}
		if (absoluteTime > parseTimeToSecs("14:24") && absoluteTime < parseTimeToSecs("14:30")) {
			document.getElementById("current-class").innerHTML = "Passing Period (To Period 8)";
		}
		if (absoluteTime > parseTimeToSecs("14:30") && absoluteTime < parseTimeToSecs("15:15")) {
			document.getElementById("current-class").innerHTML = "Period 8";
		}
	}
	else {
		document.getElementById("current-class").innerHTML = "Unrecognized Schedule";
	}
}

function getTimeLeftInPeriod() {
	if(twohour == false) {
		if (absoluteTime < parseTimeToSecs("8:30") && absoluteTime > parseTimeToSecs("7:45")) {
			return parseTimeToSecs("8:30") - absoluteTime; //period 1
		}
		if (absoluteTime > parseTimeToSecs("8:30") && absoluteTime < parseTimeToSecs("8:36")) {
			return parseTimeToSecs("8:36") - absoluteTime; //period 1 pp
		}
		if (absoluteTime > parseTimeToSecs("8:36") && absoluteTime < parseTimeToSecs("9:21")) {
			return parseTimeToSecs("9:21") - absoluteTime; //period 2
		}
		if (absoluteTime > parseTimeToSecs("9:21") && absoluteTime < parseTimeToSecs("9:27")) {
			return parseTimeToSecs("9:27") - absoluteTime; //period 2 pp
		}
		if (absoluteTime > parseTimeToSecs("9:27") && absoluteTime < parseTimeToSecs("10:12")) {
			return parseTimeToSecs("10:12") - absoluteTime; //period 3
		}
		if (absoluteTime > parseTimeToSecs("10:12") && absoluteTime < parseTimeToSecs("10:18")) {
			return parseTimeToSecs("10:18") - absoluteTime; //period 3 pp
		}
		if (absoluteTime > parseTimeToSecs("10:18") && absoluteTime < parseTimeToSecs("11:06")) {
			return parseTimeToSecs("11:06") - absoluteTime; //period 4
		}
		
		if (absoluteTime > parseTimeToSecs("11:06") && absoluteTime < parseTimeToSecs("11:12")) {
			return parseTimeToSecs("11:12") - absoluteTime; //period 4 pp
		}
		if (absoluteTime > parseTimeToSecs("11:12") && absoluteTime < parseTimeToSecs("11:57")) {
			return parseTimeToSecs("11:57") - absoluteTime; //period 5a
		}
		if (absoluteTime > parseTimeToSecs("11:57") && absoluteTime < parseTimeToSecs("12:42")) {
			return parseTimeToSecs("12:42") - absoluteTime; //period 5c
		}
		if (absoluteTime > parseTimeToSecs("12:42") && absoluteTime < parseTimeToSecs("12:48")) {
			return parseTimeToSecs("12:48") - absoluteTime;
		}
		if (absoluteTime > parseTimeToSecs("12:48") && absoluteTime < parseTimeToSecs("13:33")) {
			return parseTimeToSecs("13:33") - absoluteTime;
		}
		if (absoluteTime > parseTimeToSecs("13:33") && absoluteTime < parseTimeToSecs("13:39")) {
			return parseTimeToSecs("13:39") - absoluteTime;
		}
		if (absoluteTime > parseTimeToSecs("13:39") && absoluteTime < parseTimeToSecs("14:24")) {
			return parseTimeToSecs("14:24") - absoluteTime;
		}
		if (absoluteTime > parseTimeToSecs("14:24") && absoluteTime < parseTimeToSecs("14:30")) {
			return parseTimeToSecs("14:30") - absoluteTime;
		}
		if (absoluteTime > parseTimeToSecs("14:30") && absoluteTime < parseTimeToSecs("15:15")) {
			return parseTimeToSecs("15:15") - absoluteTime;
		}
	}
	else if(twohour == true){
		//two hour delay
		if (secondselapsed < 2100) {
			return 2100 - secondselapsed;
		}
		if (secondselapsed > 2100 && secondselapsed < 2400) {
			return 2400 - secondselapsed;
		}
		if (secondselapsed > 2400 && secondselapsed < 4200) {
			return 4200 - secondselapsed;
		}
		if (secondselapsed > 4200 && secondselapsed < 4500) {
			return 4500 - secondselapsed;
		}
		if (secondselapsed > 4500 && secondselapsed < 6300) {
			return 6300 - secondselapsed;
		}
		if (secondselapsed > 6300 && secondselapsed < 6600) {
			return 6600 - secondselapsed;
		}
		if (secondselapsed > 6600 && secondselapsed < 8400) {
			return 8400 - secondselapsed;
		}
		if (secondselapsed > 8400 && secondselapsed < 8700) {
			return 8700 - secondselapsed;
		}
		if (secondselapsed > 8700 && secondselapsed < 10500) {
			return 10500 - secondselapsed;
		}
		if (secondselapsed > 10500 && secondselapsed < 10800) {
			return 10800 - secondselapsed;
		}
		if (secondselapsed > 10800 && secondselapsed < 12600) {
			return 12600 - secondselapsed;
		}
		if (secondselapsed > 12600 && secondselapsed < 12900) {
			return 12900 - secondselapsed;
		}
		if (secondselapsed > 12900 && secondselapsed < 14700) {
			return 14700 - secondselapsed;
		}
		if (secondselapsed > 14700 && secondselapsed < 15000) {
			return 15000 - secondselapsed;
		}
		if (secondselapsed > 15000 && secondselapsed < 16800) {
			return 16800 - secondselapsed;
		}
		if (secondselapsed > 16800 && secondselapsed < 17100) {
			return 17100 - secondselapsed;
		}
		if (secondselapsed > 17100 && secondselapsed < 18900) {
			return 18900 - secondselapsed;
		}
	}
}
function setTimeLeftInPeriod() {
	var totalSecondsLeft = getTimeLeftInPeriod();
	console.log(totalSecondsLeft);
	hoursleft = Math.floor(totalSecondsLeft / 3600);
	totalSecondsLeft %= 3600;
	minutesleft = Math.floor(totalSecondsLeft / 60);
	secondsleft = Math.floor(totalSecondsLeft % 60);
	document.getElementById("current-period-left").innerHTML = hoursleft + ":" + minTwoDigits(minutesleft) + ":" + minTwoDigits(secondsleft);
	document.title = "Left in period:" + hoursleft + ":" + minTwoDigits(minutesleft) + ":" + minTwoDigits(secondsleft);
}
function time() {
	var date = new Date();
	var split = String(date).split(" ");
	var time = split[4];
	return time;
}

function delay() {
	var x = document.getElementById("twohour");
	if (twohour == true) {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
function hoursToSeconds(x) {
	return x * 3600;
}

function minutesToSeconds(x) {
	return x * 60;
}

function preferredTime() {
	timeformat = document.getElementById("preferredtime").value;
}

function days_passed(dt) {
	var current = new Date(dt.getTime());
	var previous = new Date(dt.getFullYear(), 0, 1);

	return Math.ceil((current - previous + 1) / 86400000);
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
