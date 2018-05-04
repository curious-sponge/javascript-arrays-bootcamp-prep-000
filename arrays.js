var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement){
    var bArray = new Array();
    bArray = anArray;
    bArray.unshift(anElement);
    return bArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement){
  return [anElement, ...anArray];
  
}

function addElementToEndOfArray(anArray, anElement){
   anArray.push(anElement);
  return anArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement){
  return [anArray,...anElement];
  
}