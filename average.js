function average(objectList){
  var priceTotal = 0;
  var size = 0;
  for(var key in objectList){
    var price = Number(objectList[key]);
    priceTotal += Number(price);
    size++
  }
  return priceTotal/size;
}
