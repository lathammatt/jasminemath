describe ("lots of math", function () {

	it("should have an adder", function (){
		expect(add).toBeDefined();
	});

	it("should add two integers", function(){
		expect(add(5, 7)).toBe(12);
	});

	it("should have a subtractor", function() {
	expect(subtract).toBeDefined();
	});

	it("should subtract two integers", function() {
	expect(subtract(7, 5)).toBe(2);
	});

	it("should have a multiplier", function() {
	expect(multiply).toBeDefined();
	});

	it("should multiply two integers", function() {
	expect(multiply(7, 5)).toBe(35);
	});

	it("should have a divider", function() {
	expect(divide).toBeDefined();
	});

	it("should divide two integers", function() {
	expect(divide(35, 5)).toBe(7);
	});

	it("should have a square function", function() {
	expect(square).toBeDefined();
	});

	it("should square one integer", function() {
	expect(square(7)).toBe(49);
	});

	it("should have a square root function", function() {
	expect(sroot).toBeDefined();
	});

	it("should find square root of one integer", function() {
	expect(sroot(49)).toBe(7);
	});
});