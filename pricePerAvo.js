function pricePerAvo(list){
  var pricePerAvo = {};
  var fixedList = [];
  //remove 'for'
  for(var i = 0; i < list.length; i++){
    var current = list[i];
    if(current !== 'for'){
      if(current.startsWith('R')){
        current = current[1];
      };
      current = Number(current);
      current = current.toFixed(2);
      fixedList.push(current);
    };
  };

  var currentAvo = 1;
  for(var i = 0; i < fixedList.length; i+=2){
    var numOfAvos = fixedList[i];
    var price = fixedList[i+1];
    console.log("number of avos: " + numOfAvos + " price: " + price);
    var total = price/numOfAvos
    console.log(currentAvo);
    pricePerAvo["Deal " + currentAvo] = total.toFixed(2);
    currentAvo++;
  };
  console.log(pricePerAvo);
  return pricePerAvo;
};
