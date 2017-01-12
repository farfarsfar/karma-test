describe('Example', function(){
	it('add should add bro', function(){
		expect(add(1,1)).toBe(2);
	});
	it('divide should divide bro', function(){
		expect(divide(25,5)).toBe(5);
	})
	it('should not be able to divide by 0', function(){
		expect(divide(25,0)).toBe('Black hoooole');
	});
	it('should subtract the second value from the first value ', function(){
		expect(subtract(30, 25)).toBe(5);
	})
});