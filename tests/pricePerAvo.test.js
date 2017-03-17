describe('pricePerAvo function', function(){
  it('should return {1 : 3.00, 2 : 3.50}', function(){
    assert.deepEqual({'Deal 1' : '3.00', 'Deal 2' : '3.50'}, pricePerAvo(['1', 'for', 'R3,', '2', 'for', 'R7,']));
  });
});
