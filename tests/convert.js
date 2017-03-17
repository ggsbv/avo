describe('convert.js function', function(){
  it('should return array ["1", "for", "R3,"]', function(){
    assert.deepEqual(["1", "for", "R3,", "2", "for", "R7,"], convert('1 for R3, 2 for R7,'));
  });
});
