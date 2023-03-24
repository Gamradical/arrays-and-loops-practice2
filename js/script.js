var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];
var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`Sorry, this item is not on the list`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}.`);
  }
};
removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "perfume");
console.log(stuff);
