var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement){
    var bArray = [anElement, ...anArray];
    return bArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement){
  anArray.unshift(anElement);
  return anArray;
  
}

function addElementToEndOfArray(anArray, anElement){
   anArray.push(anElement);
  return anArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement){
  return [anArray,...anElement];
  
}