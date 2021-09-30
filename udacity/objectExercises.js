/* umbrella
var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  close: function () {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella"
    }
  }
}; 
*/

/* breakfast - create an object
var breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast);
*/

/* bank accounts - adding methods in objects 
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary: function(){
    return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
  }
};
*/

/* facebook friends - creating an object and messages
var facebookProfile = {
  name: "Jamie",
  friends: 5,
  messages: [],
  postMessage: function(message) {
    facebookProfile.messages.push(message)
  },
  deleteMessage: function(i) {
    facebookProfile.messages.splice(i, 1)
  },
  addFriend: function () {
    facebookProfile.friends += 1
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0)
      facebookProfile.friends -= 1
  }
}
*/

/* Donuts revisited - looping an array of objects*/
var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
  console.log(donut.type + " donuts cost $" + donut.cost + " each")
});
