describe("function mostExpensiveDeal.js", function(){
  it("should return R3.50 as the most expensive deal", function(){
    assert.equal("The most expensive deal is Deal 1 @ R3.50", mostExpensiveDeal({'Deal 1' : "3.50", 'Deal 2' : "3.00"}));
  });
})
