function mostExpensiveDeal(objectList){
  var mostExpensivePrice = 0;
  var mostExpensiveDealNum = '';
  for(var currentKey in objectList){
    var currentPrice = objectList[currentKey];
    if(currentPrice > mostExpensivePrice || mostExpensivePrice === 0){
      mostExpensiveDealNum = currentKey;
      mostExpensivePrice = currentPrice;
    }
  };
  return "The most expensive deal is " + mostExpensiveDealNum + " @ R" + mostExpensivePrice.toString();
};
