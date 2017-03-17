function cheapestDeal(objectList){
  var lowestPrice = 0;
  var lowestDealNum = '';
  for(var currentKey in objectList){
    console.log(currentKey);
    var currentPrice = objectList[currentKey];
    console.log(currentKey);
    console.log(currentPrice);
    if(currentPrice < lowestPrice || lowestPrice === 0){
      console.log(currentPrice);
      lowestDealNum = currentKey;
      lowestPrice = currentPrice;
    }
  };
  console.log("Lowest price is " + lowestPrice);
  console.log("Lowest deal num is " + lowestDealNum);
  return "The cheapest deal is " + lowestDealNum + " @ R" + lowestPrice.toString();
};
