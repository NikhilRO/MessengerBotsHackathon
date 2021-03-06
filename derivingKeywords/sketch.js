//(accessed through IABIN data portal, AlgaeBase, http://200.144.189.73/portal/datasets/resource/4)
//Linnaeus would be proud
//kingdom, phylum, class, order, family, genus, species.

var products = [];
var keywords = [];

function preload() {
    var tempArray2 = loadJSON("keywords.json", intoArray2);
    var tempArray = loadJSON("productKeywords.json", intoArray1);
    
}

/**
 * This function takes the array and uses Binary search on it
 * @param  {array}  arr  This is the array to be searched
 * @param  {number} i    This is what we are looking for
 * @return {number}      The index which matches x or -1 if no match
 */
function intoArray1(tempArray) {
  createCanvas(600,600)//windowWidth, windowHeight); //NEED A BETTER WAY TO NAVIGATE
  var number = countProps(tempArray);
  for (var i = 0; i < number; i++) {
    products.push(tempArray[i]);
  }
  console.log("Done array: " + millis());
}

function intoArray2(tempArray2) {
  createCanvas(600,600)//windowWidth, windowHeight); //NEED A BETTER WAY TO NAVIGATE
  var number = countProps(tempArray2);
  for (var i = 0; i < number; i++) {
    keywords.push(tempArray2[i]);
  }
  console.log("Done array: " + millis());
}

function setup() {
  console.log("Setup:" + millis());
//  saveJSON(products, 'productKeywords.json');
}


function draw() {
  background(0);
}

/**
 * In javascript there are array-like objects. They don't have ".length" property. This function calculates the length for us. 
 * @param  {object}  obj  The array-like object
 * @return {number}       The length of the array-like object
 */
function countProps(obj) {
  var count = 0;
  for (var p in obj) {
    obj.hasOwnProperty(p) && count++;
  }
  return count;
}