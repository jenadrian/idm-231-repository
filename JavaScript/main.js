//declare global variables outside of functions here
var firstName;
var lastName;
var birthDay0bj;
var age
var currentDate


var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function calZodiac(){
  //name and date error checking not needed when using chrome
  firstName = document.getElementById('fname').value;
  lastName = document.getElementById('lname').value;
  birthDay0bj = new Date(document.getElementById('bday').value);
  currentDate = new Date();

  var whichDayNdx = birthDay0bj.getUTCDay();
  console.log('whichDayNdx is'+ whichDayNdx);

  var whichMonth = birthDay0bj.getUTCMonth();
  console.log('whichMonth is' + whichMonth);

  var whichDayOfMonth = birthDay0bj.getUTCDate();
  console.log('whichDayOfMonth is' + whichDayOfMonth);


   var age = calculate_age(birthDay0bj);

function calculate_age(birthday){
    var utcDate = new Date();
     var ageInMilliseconds = utcDate.getTime() - birthday.getTime();
     if(!isNaN(ageInMilliseconds)){
       var age = ageInMilliseconds/1000/60/60/24/365;
       return Math.floor(age);
     }else{
       alert("invalid age");
       return;
     }

 }

  whichMonth ++;
  whichDayOfMonth ++;

  var AstroSign;

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Capricorn";
    }

    if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
      AstroSign = "Sagittarius";
    }

    if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
      AstroSign = "Scorpio";
    }

    if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
      AstroSign = "Libra";
    }

    if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
      AstroSign = "Virgo";
    }

    if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
      AstroSign = "Leo";
    }

    if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
      AstroSign = "Cancer";
    }

    if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
      AstroSign = "Gemini";
    }

    if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
      AstroSign = "Taurus";
    }

    if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
      AstroSign = "Aries";
    }

    if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
      AstroSign = "Pisces";
    }

    if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
      AstroSign = "Aquarius";
    }

  var outputArea = document.getElementById('displayMsg');

  outputArea.innerHTML = 'Hello ' + firstName +' '+ lastName +',' + ' you were born on a ' + WeekDays[whichDayNdx] + '.' + ' Your zodiac sign is ' + AstroSign + ' and you are' +' ' + age + ' years old.';

return false;
  //return false prevents form from resetting
}

//  outputArea.innerHTML += '<p>CANDLES: ';
//   for (lp = 0; lp < age; lp++) {
//     console.log(lp);
//     outputArea.innerHTML +='i ';
//   }
//
// outputArea.innerHTML += '</p>';
// outputArea.innerHTML = msg;
