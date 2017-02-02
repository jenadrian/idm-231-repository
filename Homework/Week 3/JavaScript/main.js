//declare global variables outside of functions here
/*function calZodiac(){
  var outputArea = document.getElementById('displayMsg');
  outputArea.innerHTML = 'calZodiac called';
  return false;
  //return false to prevent form from resetting
}
*/
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

  var whichDayNdx = birthDay0bj.getDay();
  console.log('whichDayNdx is'+ whichDayNdx);

  var whichMonth = birthDay0bj.getMonth();
  console.log('whichMonth is' + whichMonth);

  var whichDayOfMonth = birthDay0bj.getDate();
  console.log('whichDayOfMonth is' + whichDayOfMonth);

  var age = currentDate.getFullYear() - birthDay0bj.getFullYear();
  console.log('age is' + age);




  whichMonth ++;
  whichDayOfMonth ++;

  var AstroSign;

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Capricorn";
  }

  var outputArea = document.getElementById('displayMsg');

  outputArea.innerHTML = 'Hello ' + firstName +' '+ lastName +',' + ' you were born on a ' + WeekDays[whichDayNdx] + '.' + ' Your zodiac sign is ' + AstroSign + ' and you are' +' ' + age + ' years old.';

  return false;
  //return false prevents form from resetting
}
