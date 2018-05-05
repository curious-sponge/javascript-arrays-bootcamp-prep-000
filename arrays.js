var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(anArray, anElement){
    var bArray = [anElement, ...anArray];
    return bArray;
}

function destructivelyAddElementToBeginningOfArray(anArray, anElement){
  return anArray.unshift(anElement);
  
}

function addElementToEndOfArray(anArray, anElement){
   anArray.push(anElement);
  return anArray;
}

function destructivelyAddElementToEndOfArray(anArray, anElement){
  return [anArray,...anElement];
  
}