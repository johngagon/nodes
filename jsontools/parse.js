const fs = require('fs');

let rawdata = fs.readFileSync('friends.json');
let friendList = JSON.parse(rawdata);

const friends = friendList.friends;
console.log(friends.length);

const friendNames = friends.map(friend => friend.name);
const friendsText = friendNames.join("\n");
// console.log(friendsText);


fs.writeFile('friends.txt', friendsText, function (err) {
  if (err) return console.log(err);
  console.log('friends.json > friends.txt');
});
