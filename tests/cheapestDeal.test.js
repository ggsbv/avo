describe("function cheapestDeal.js", function(){
  it("should return R3.00 as the cheapest deal", function(){
    assert.equal("The cheapest deal is Deal 2 @ R3.00", cheapestDeal({'Deal 1' : "3.50", 'Deal 2' : "3.00"}));
  });
})
