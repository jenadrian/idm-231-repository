var firstName;
var lastName;
var birthDay0bj;
var age
var currentDate


var WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var messages = [
  {
    name: 'a \'Actually, It\'s a Tall\'',
    description: 'Sorry, it doesn\'t matter what you ordered if you asked for a small instead of a tall. Small isn\'t a size at Starbucks so it looks like you don\'t get the coffee you just paid $6 for. Oh well!'
  },{
    name: 'a Westphal',
    description: 'Crippling sleep deprivation and caffeine dependency are the requirements for maintaining good academic standing in Westphal College of Media Arts and Design. Step into an art student\'s shoes with this secret menu special featuring 12 shots of espresso topped off with black coffee. Enjoy the next week of insomnia!'
  },{
    name: 'an I Hate Coffee',
    description: 'Frankly, if you don\'t even like coffee, this secret menu special is for you. Straight off the menu it comes with extra extra cream, 6oz. of simple syrup, four sugars stirred in and whipped cream topping. Oh, and just a splash of coffee (but not enough for you to be able to taste it)!'
  },{
    name: 'a Smokachino',
    description: 'Ah, caffeine and nicotine; two horrible vices in one great deal! Sustain both of your bad habits with this secret menu order.'
  },{
    name: 'a SO Over It Special',
    description: 'You don\'t waste time so neither do we. Make the most of yours with a trenta cup of sangria (that\'s an entire bottle, FYI) in this super secret menu special order. Bonus: Our cold cups seal, meaning this special technically doesn\'t violate Philadelphia\'s open container laws. Not that you care.'
  },{
    name: 'a Two Buck Chuck Brewed Coffee',
    description: 'We get it: you don\'t need all the bells and whistles in your daily cuppa joe. Enjoy your black coffee (which costs us approximately $0.05 to brew) for $2.99!'
  },{
    name: 'a Kinda Sorta on a Diet Vanilla Latte',
    description: 'You\'ve resolved to eat clean this year and you\'re currently detoxing from sugar, alcohol, animal byproducts, and anything remotely fun making this the best secret menu special for you! Made with skim milk, 10 pumps of sugar-free vanilla syrup, and topped with whipped cream beccause if you can\'t see it, the calories don\'t count. Am I right?'
  },{
    name: 'a Teavanamama',
    description: 'Not sure WTF you thought you were doing by ordering tea at a coffee shop, but if you\'re going to be that much of a pain then this special suits you just fine. Enjoy every single variety of tea bag currently in stock, all stuffed into a 6oz cup of lukewarm water. That\'ll be $11!'
  },{
    name: 'a Running 5 Minutes Late(r) Latte',
    description: 'In addition to making you at least five minutes later to the meeting you\'re already 10 minutes late for, this secret menu special practically screams \'I care more about my coffee than being on time!\' How charming.'
  },{
    name: 'an UnInstagrammable',
    description: 'This secret menu item is a favorite of every Barista! Order it if you want your name butchered, ruining any chances of your cup of overpriced coffee clogging up your followers\' feeds.'
  },{
    name: 'a Ariana Grande Mocha Latte',
    description: 'Homegirl Ariana is the most extra of the extras and if you go to Starbucks you\'re probably a bit extra too. Enjoy extra mocha and caramel syrup along with 5 pumps of every flavored simple syrup we have in stock. At least half of your cup will consist of whipped cream.'
  },{
    name: 'a Vegan[When it\'s Trending]',
    description: 'This secret menu special is super limited editon. Only on the menu when veganism is especially trendy. Order for a mediorcre, borderline bad latte to be made even worse by using non-dairy milk instead of regular. Up-charge of $7 for this because we can.'
  }
]

function getMessageIndex(month, day) {
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    return 0;
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    return 1;
  } else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    return 2;
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    return 3;
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return 4;
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    return 5;
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    return 6;
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    return 7;
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    return 8;
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    return 9;
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    return 10;
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    return 11;
  }
}

function showMessage(index, name) {
  var outputArea = document.getElementById('displayMsg');
  var message = messages[index];
  var outputString = 'Hey there, ';
  if (name !== undefined) {
    outputString += name + ', ';
  }
  outputString += 'you ordered ' + ' '+ message.name + '. ' + message.description;
  outputArea.innerHTML = outputString;
}

function calZodiac(){
  var coffeeCup = document.getElementById('coffeeCup');
  coffeeCup.style.display = 'block';

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
  showMessage(getMessageIndex(whichMonth, whichDayOfMonth), firstName);

  return false;
}
